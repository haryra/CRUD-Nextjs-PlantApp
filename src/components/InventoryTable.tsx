import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function InventoryTable() {
    const plants = [
  {
    id: "inv001",
    name: "plant 1",
    category: "indoor",
    price: 250,
    stock: 5,
  }];
  return (
    <div className='w-full'>
        <div className='flex items-center gap-2 py-4'>
            <div className='relative max-w-sm w-full'>
                {/* Add Input and Search */}
            </div>
        </div>

        <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Plant Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {plants.map((plant) => (
          <TableRow key={plant.id}>
            <TableCell>{plant.id}</TableCell>
            <TableCell>{plant.name}</TableCell>
            <TableCell>{plant.category}</TableCell>
            <TableCell>{plant.price}</TableCell>
            <TableCell className="font-bold">{plant.stock}</TableCell>
            <TableCell className="text-right">
                <div className='flex justify-end space-x-4'>
                    <h1>Edit Button</h1>
                    <h1>Delete Button</h1>
                </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
    </div>



    
  )
}

export default InventoryTable