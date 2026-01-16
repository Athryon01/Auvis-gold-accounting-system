import React from 'react'
import { DataTable, createColumnsFromData } from '@/components/data-table'
import useGolds from '@/features/store/global/useGolds'
import { Badge } from '@/components/ui/badge'

function Golds() {
  const { golds, addGold } = useGolds()
  
  const columns = createColumnsFromData(golds, {
    excludeColumns: ['id'],
    columnSizes: {
      name: 200,
      totalQuantity: 150,
      totalWeight: 150,
    },
    customRenderers: {
      totalQuantity: (value) => (
        <Badge variant="outline" className="font-mono">
          {value.toLocaleString()} unit
        </Badge>
      ),
      totalWeight: (value) => (
        <Badge variant="secondary" className="font-mono">
          {value.toLocaleString()} g
        </Badge>
      ),
    },
  })

  const handleAddGold = () => {
    const newGold = {
      id: golds.length + 1,
      name: `Gold Item ${golds.length + 1}`,
      totalQuantity: 500,
      totalWeight: 5000,
    }
    addGold(newGold)
  }

  return (
    <DataTable
      data={golds}
      columns={columns}
      enableDragAndDrop={true}
      enableRowSelection={true}
      enablePagination={true}
      enableColumnVisibility={true}
      enableSorting={true}
      idKey="id"
      tableTitle="Gold Inventory"
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
  )
}

export default Golds