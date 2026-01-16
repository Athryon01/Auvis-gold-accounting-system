import React from 'react'
import { DataTable, createColumnsFromData } from '@/components/data-table'
import { Badge } from '@/components/ui/badge'
import useCommodities from '@/features/store/global/useCommodities'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { AppDrawer } from '@/components/AppDrawer'
function Commodities() {
  let {commodities,addCommodity} = useCommodities()
  
  const columns = createColumnsFromData(commodities, {
    excludeColumns: ['id'],
    columnSizes: {
      name: 200,
      quantity: 150,
      price:2,
      description: 150,
      
    },
    customRenderers: {
      price: (value) => (
        <Badge variant="outline" className="font-mono">
          {value.toLocaleString()} 
        </Badge>
      ),
      description: (value) => (
        <Popover>
      <PopoverTrigger asChild>
      <Badge variant="outline" className="font-mono">
          {value.toLocaleString().length > 20 ? `${value.toLocaleString().substring(0,20)}...`  : value.toLocaleString()} 
        </Badge>
      </PopoverTrigger>
      
      
      {value.toLocaleString().length > 20 ? <PopoverContent  className=" w-80">
        <div className="  grid gap-4">
        {value.toLocaleString()} 
        </div>
      </PopoverContent> : null }
    
    </Popover>
      ),
      quantity: (value) => (
        <Badge variant="secondary" className="font-mono">
          {value.toLocaleString()} 
        </Badge>
      ),
    },
  })

  const handleAddGold = () => {
    const newGold = {
      id: commodities.length + 1,
      name: `commodity Item ${commodities.length + 1}`,
      price: 5000,
      quantity:2,
      description:400,
    }
    addCommodity(newGold)
  }

  return (
  <>
  <DataTable
      data={commodities}
      columns={columns}
      enableDragAndDrop={true}
      enableRowSelection={true}
      enablePagination={true}
      enableColumnVisibility={true}
      enableSorting={true}
      idKey="id"
      tableTitle="commodities Inventory"
      onAddClick={handleAddGold}
      onEditClick={(item) => console.log('Edit:', item)}
      onDeleteClick={(item) => console.log('Delete:', item)}
      pageSizeOptions={[5, 10, 20, 50]}
      defaultPageSize={10}
      onDataChange={(newData) => {
        // اگر نیاز دارید داده‌های مرتب شده را ذخیره کنید
        console.log('Data changed:', newData)
      }}
    />
   
  </>
  )
}

export default Commodities