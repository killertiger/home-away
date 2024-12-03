import React from 'react'
import { Label } from '../ui/label';
import { Select, SelectItem, SelectTrigger } from '../ui/select';
import { categories } from '@/utils/categories';
import { SelectContent, SelectValue } from '@radix-ui/react-select';

const name = 'category';

export default function CategoriesInput({ defaultValue }: { defaultValue?: string }) {
    return (
        <div className='mb-2'>
            <Label htmlFor={name} className='capitalize'>
                Categories
            </Label>
            <Select
                defaultValue={defaultValue || categories[0].label}
                name={name}
                required
            >
                <SelectTrigger id={name}>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {categories.map((item) => {
                        return <SelectItem key={item.label} value={item.label}>
                            <span className='flex items-center gap-2'>
                                <item.icon /> {item.label}
                            </span>
                        </SelectItem>
                    })}
                </SelectContent>
            </Select>
        </div>
    )
}
