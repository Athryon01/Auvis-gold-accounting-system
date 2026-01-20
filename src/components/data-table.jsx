import * as React from "react"
import useDrawer from "@/features/store/global/useDrawer";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconCircleCheckFilled,
  IconDotsVertical,
  IconGripVertical,
  IconLayoutColumns,
  IconLoader,
  IconPlus,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons-react"
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function DragHandle({
  id
}) {
  const { attributes, listeners } = useSortable({
    id,
  })

  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="text-muted-foreground size-7 hover:bg-transparent">
      <IconGripVertical className="text-muted-foreground size-3" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  );
}
function DraggableRow({
  row,
  enableDragAndDrop,
  idKey
}) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original[idKey],
  })

  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      data-dragging={isDragging}
      ref={setNodeRef}
      className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
      style={{
        transform: enableDragAndDrop ? CSS.Transform.toString(transform) : undefined,
        transition: enableDragAndDrop ? transition : undefined,
      }}>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
}

export function DataTable({
  
  data: propData,
  columns: userColumns,
  enableDragAndDrop = false,
  enableRowSelection = true,
  enablePagination = true,
  enableColumnVisibility = true,
  enableSorting = true,
  idKey = "id",
  tableTitle = "Data Table",
  onAddClick,
  onEditClick,
  onDeleteClick,
  customTableActions,
  pageSizeOptions = [10, 20, 30, 40, 50],
  defaultPageSize = 10,
  onDataChange
}) {
  const [data, setData] = React.useState(() => propData)
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [columnFilters, setColumnFilters] = React.useState([])
  const [sorting, setSorting] = React.useState([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: defaultPageSize,
  })
  let {openDrawer,isDrawerOpen} = useDrawer()
  function open_drawer() {
    console.log(isDrawerOpen);
    
    openDrawer({state:true})
   
    console.log(isDrawerOpen);
    
  }
  React.useEffect(() => {
    setData(propData)
  }, [propData])

  const sortableId = React.useId()
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )

  const columns = React.useMemo(() => {
    const baseColumns = [...userColumns]
    
    if (enableDragAndDrop) {
      baseColumns.unshift({
        id: "drag",
        header: () => null,
        cell: ({ row }) => <DragHandle id={row.original[idKey]} />,
        size: 40,
        enableSorting: false,
      })
    }
    
    if (onEditClick || onDeleteClick || customTableActions) {
      baseColumns.push({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                size="icon">
                <IconDotsVertical />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              {onEditClick && (
                <DropdownMenuItem onClick={() => onEditClick(row.original)}>
                  Edit
                </DropdownMenuItem>
              )}
              <DropdownMenuItem>Make a copy</DropdownMenuItem>
              <DropdownMenuItem>Favorite</DropdownMenuItem>
              {onDeleteClick && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    variant="destructive"
                    onClick={() => onDeleteClick(row.original)}>
                    Delete
                  </DropdownMenuItem>
                </>
              )}
              {customTableActions && customTableActions(row.original)}
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        size: 60,
        enableSorting: false,
      })
    }
    
    return baseColumns
  }, [userColumns, enableDragAndDrop, idKey, onEditClick, onDeleteClick, customTableActions])

  const dataIds = React.useMemo(() => data?.map((item) => item[idKey]) || [], [data, idKey])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: enableSorting ? sorting : [],
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row[idKey].toString(),
    enableRowSelection,
    enableSorting,
    onRowSelectionChange: setRowSelection,
    onSortingChange: enableSorting ? setSorting : undefined,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  function handleDragEnd(event) {
    if (!enableDragAndDrop) return
    
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      const newData = arrayMove(data, dataIds.indexOf(active.id), dataIds.indexOf(over.id))
      setData(newData)
      if (onDataChange) {
        onDataChange(newData)
      }
    }
  }

  return (
    <div className="w-full flex-col justify-start gap-6">
      <div className="flex items-center justify-between px-4 lg:px-6">
        <h2 className="text-lg font-semibold">{tableTitle}</h2>
        <div className="flex items-center gap-2">
          {enableColumnVisibility && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <IconLayoutColumns />
                  <span className="hidden lg:inline">Customize Columns</span>
                  <span className="lg:hidden">Columns</span>
                  <IconChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {table
                  .getAllColumns()
                  .filter((column) =>
                    typeof column.accessorFn !== "undefined" &&
                    column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }>
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {onAddClick && (
            <Button variant="outline" size="sm" onClick={()=>{open_drawer()}} >
              <IconPlus />
              <span className="hidden lg:inline">Add</span>
            </Button>
          )}
        </div>
      </div>
      <div className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6">
        <div className="overflow-hidden rounded-lg border">
          {enableDragAndDrop ? (
            <DndContext
              collisionDetection={closestCenter}
              modifiers={[restrictToVerticalAxis]}
              onDragEnd={handleDragEnd}
              sensors={sensors}
              id={sortableId}>
              <Table>
                <TableHeader className="bg-muted sticky top-0 z-10">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead 
                            key={header.id} 
                            colSpan={header.colSpan}
                            style={{ width: header.column.columnDef.size }}
                            className={header.column.getCanSort() ? "cursor-pointer select-none" : ""}
                            onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}>
                            {header.isPlaceholder ? null : (
                              <div className="flex items-center gap-2">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                                {enableSorting && header.column.getCanSort() && (
                                  <div className="flex flex-col">
                                    <IconArrowUp className={`size-3 ${header.column.getIsSorted() === "asc" ? "text-primary" : "text-muted-foreground"}`} />
                                    <IconArrowDown className={`size-3 ${header.column.getIsSorted() === "desc" ? "text-primary" : "text-muted-foreground"}`} />
                                  </div>
                                )}
                              </div>
                            )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody className="**:data-[slot=table-cell]:first:w-8">
                  {table.getRowModel().rows?.length ? (
                    <SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
                      {table.getRowModel().rows.map((row) => (
                        <DraggableRow 
                          key={row.id} 
                          row={row} 
                          enableDragAndDrop={enableDragAndDrop}
                          idKey={idKey}
                        />
                      ))}
                    </SortableContext>
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-24 text-center">
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </DndContext>
          ) : (
            <Table>
              <TableHeader className="bg-muted sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead 
                          key={header.id} 
                          colSpan={header.colSpan}
                          style={{ width: header.column.columnDef.size }}
                          className={header.column.getCanSort() ? "cursor-pointer select-none" : ""}
                          onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}>
                          {header.isPlaceholder ? null : (
                            <div className="flex items-center gap-2">
                              {flexRender(header.column.columnDef.header, header.getContext())}
                              {enableSorting && header.column.getCanSort() && (
                                <div className="flex flex-col">
                                  <IconArrowUp className={`size-3 ${header.column.getIsSorted() === "asc" ? "text-primary" : "text-muted-foreground"}`} />
                                  <IconArrowDown className={`size-3 ${header.column.getIsSorted() === "desc" ? "text-primary" : "text-muted-foreground"}`} />
                                </div>
                              )}
                            </div>
                          )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
        
        {enablePagination && (
          <div className="flex items-center justify-between px-4">
            <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
              {`${table.getFilteredRowModel().rows.length} item${table.getFilteredRowModel().rows.length >1?"s":" "}`}
            </div>
            <div className="flex w-full items-center gap-8 lg:w-fit">
              <div className="hidden items-center gap-2 lg:flex">
                <Label htmlFor="rows-per-page" className="text-sm font-medium">
                  Rows per page
                </Label>
                <Select
                  value={`${table.getState().pagination.pageSize}`}
                  onValueChange={(value) => {
                    table.setPageSize(Number(value))
                  }}>
                  <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                    <SelectValue placeholder={table.getState().pagination.pageSize} />
                  </SelectTrigger>
                  <SelectContent side="top">
                    {pageSizeOptions.map((pageSize) => (
                      <SelectItem key={pageSize} value={`${pageSize}`}>
                        {pageSize}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-fit items-center justify-center text-sm font-medium">
                Page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </div>
              <div className="ml-auto flex items-center gap-2 lg:ml-0">
                <Button
                  variant="outline"
                  className="hidden h-8 w-8 p-0 lg:flex"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}>
                  <span className="sr-only">Go to first page</span>
                  <IconChevronsLeft />
                </Button>
                <Button
                  variant="outline"
                  className="size-8"
                  size="icon"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}>
                  <span className="sr-only">Go to previous page</span>
                  <IconChevronLeft />
                </Button>
                <Button
                  variant="outline"
                  className="size-8"
                  size="icon"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}>
                  <span className="sr-only">Go to next page</span>
                  <IconChevronRight />
                </Button>
                <Button
                  variant="outline"
                  className="hidden size-8 lg:flex"
                  size="icon"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}>
                  <span className="sr-only">Go to last page</span>
                  <IconChevronsRight />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function createColumnsFromData(data, options = {}) {
  if (!data || data.length === 0) return []
  
  const sampleItem = data[0]
  const columns = []
  
  Object.keys(sampleItem).forEach((key) => {
    if (options.excludeColumns && options.excludeColumns.includes(key)) return
    
    const column = {
      accessorKey: key,
      header: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
      cell: ({ row }) => {
        const value = row.original[key]
        
        if (options.customRenderers && options.customRenderers[key]) {
          return options.customRenderers[key](value, row.original)
        }
        
        if (typeof value === 'boolean') {
          return (
            <Badge variant={value ? "default" : "secondary"}>
              {value ? "Yes" : "No"}
            </Badge>
          )
        }
        
        if (typeof value === 'number') {
          if (key.toLowerCase().includes('weight') || key.toLowerCase().includes('wight')) {
            return `${value.toLocaleString()} g`
          }
          if (key.toLowerCase().includes('quantity')) {
            return `${value.toLocaleString()} unit`
          }
          return value.toLocaleString()
        }
        
        return String(value)
      },
      enableSorting: true,
    }
    
    if (options.columnSizes && options.columnSizes[key]) {
      column.size = options.columnSizes[key]
    }
    
    columns.push(column)
  })
  
  return columns
}