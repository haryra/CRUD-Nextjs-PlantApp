"use client"

import React, { useState } from 'react'
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
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { Combobox } from './ui/combo-box';
import { getPlants } from '@/actions/plant.action';
import { useRouter } from 'next/navigation';


const plants = [
  {
    id: "inv001",
    name: "plant 1",
    category: "indoor",
    price: 250,
    stock: 5,
  }];

  type Plants = Awaited<ReturnType<typeof getPlants>>;

  interface InventoryTableProps {
  plants: Plants;
}


function InventoryTable({plants}: InventoryTableProps) {
    const router = useRouter();
    const [selectedCategory,setselectedCategory] = useState("");
     const [searchTerm, setSearchTerm] = useState("");

    //  Filter plants by name and category (if selected)
    const filteredPlants = plants?.userPlants?.filter(
      (plant) => 
        plant.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategory == "" || plant.category === selectedCategory)
    );


  return (
    <div className='w-full'>
        <div className='flex items-center gap-2 py-4'>
            <div className='relative max-w-sm w-full'>
                {/* Add Input and Search */}
                {/* Input */}
                    <Input
                      placeholder="Filter Plant"
                      className="pl-10 rounded-lg focus-visible:ring-0"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className='absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2'/>
                {/* end Input */}
            </div>
            <Combobox value={selectedCategory} onChange={(val) => setselectedCategory(val)} />
        </div>

        <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Plant Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredPlants?.map((plant) => {
         const slugifiedName = plant.name.toLowerCase().replace(/\s+/g, "-");
        const slug = `${plant.id}--${slugifiedName}`;
        const plantUrl = `/plants/${slug}`;
         return(

          <TableRow key={plant.id} onClick={() => router.push(plantUrl)}>
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
        )})}
      </TableBody>
      
    </Table>
    </div>



    
  )
}

export default InventoryTable