import React from 'react'
import { Label } from '../ui/label'
import { Select, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { formattedCountries } from '@/utils/contries';
import { SelectContent } from '@radix-ui/react-select';

const name = 'country';

export default function CountriesInput({ defaultValue }: { defaultValue?: string }) {
    return (
        <div className='mb-2'>
            <Label htmlFor={name} className='capitalize'>
                country
            </Label>
            <Select
                defaultValue={defaultValue || formattedCountries[0].code}
                name={name}
                required>
                <SelectTrigger id={name}>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {formattedCountries.map((item) => {
                        return <SelectItem key={item.code} value={item.code}>
                            <span className='flex items-center gap-2'>
                                {item.flag} {item.name}
                            </span>
                        </SelectItem>
                    })}
                </SelectContent>
            </Select>
        </div>
    )
}
