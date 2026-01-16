import React from 'react'
import { DataTable, createColumnsFromData } from '@/components/data-table'
import { Badge } from '@/components/ui/badge'
import useCoins from '@/features/store/global/useCoins'

function Coins() {
  let {coins,addCoin} = useCoins()
  
  const columns = createColumnsFromData(coins, {
    excludeColumns: ['id'],
    columnSizes: {
      name: 200,
      purity: 150,
      quantity:2,
      weight: 150,
      purchasePrice:150
    },
    customRenderers: {
      purity: (value) => (
        <Badge variant="outline" className="font-mono">
          {value.toLocaleString()} K
        </Badge>
      ),
      weight: (value) => (
        <Badge variant="secondary" className="font-mono">
          {value.toLocaleString()} gr
        </Badge>
      ),
    },
  })

  const handleAddGold = () => {
    const newGold = {
      id: coins.length + 1,
      name: `coin Item ${coins.length + 1}`,
      purity: 500,
      weight: 5000,
      quantity:2,
      purchasePrice:400,
    }
    addCoin(newGold)
  }

  return (
    <DataTable
      data={coins}
      columns={columns}
      enableDragAndDrop={true}
      enableRowSelection={true}
      enablePagination={true}
      enableColumnVisibility={true}
      enableSorting={true}
      idKey="id"
      tableTitle="Coins Inventory"
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

export default Coins