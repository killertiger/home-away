import { PropertyCardProps } from '@/utils/types';
import React from 'react';
import PropertyCard from '../card/PropertyCard';


export default function PropertiesList({ properties }: { properties: PropertyCardProps[] }) {
  return (
    <section>
      {properties.map((property) => {
        return <PropertyCard key={property.id} property={property} />
      })}
    </section>
  )
}
