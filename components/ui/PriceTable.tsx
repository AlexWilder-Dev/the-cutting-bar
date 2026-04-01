'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LADIES_PRICES,
  LADIES_OVER_65_PRICES,
  GENTS_PRICES,
  CHILDREN_PRICES,
} from '@/lib/constants'

type Tab = 'ladies' | 'ladies65' | 'gents' | 'children'

const TABS: { id: Tab; label: string }[] = [
  { id: 'ladies', label: 'Ladies' },
  { id: 'ladies65', label: 'Ladies 65+' },
  { id: 'gents', label: 'Gents' },
  { id: 'children', label: 'Children' },
]

export default function PriceTable() {
  const [activeTab, setActiveTab] = useState<Tab>('ladies')

  return (
    <div className="w-full">
      {/* Tab bar */}
      <div className="relative flex border-b border-[#E8E4CF] mb-8 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-4 font-inter text-xs tracking-[0.12em] uppercase whitespace-nowrap transition-colors duration-300 focus-visible:outline-[#C1666B] ${
              activeTab === tab.id
                ? 'text-[#C1666B]'
                : 'text-[#2D2D2D] hover:text-[#C1666B]'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.span
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C1666B]"
                transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="min-h-[300px]">
        {activeTab === 'ladies' && (
          <PriceList items={LADIES_PRICES} />
        )}
        {activeTab === 'ladies65' && (
          <PriceList items={LADIES_OVER_65_PRICES} />
        )}
        {activeTab === 'gents' && (
          <PriceList items={GENTS_PRICES} />
        )}
        {activeTab === 'children' && (
          <ChildrenTable />
        )}
      </div>

      {/* Note */}
      <p className="font-inter text-xs text-[#2D2D2D]/60 mt-8 italic">
        Prices are subject to change. Please ask your stylist for a full list of services.
      </p>
    </div>
  )
}

function PriceList({ items }: { items: { service: string; price: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {items.map((item, i) => (
        <div
          key={item.service}
          className={`flex items-center justify-between py-4 px-4 border-b border-[#E8E4CF] ${
            i % 2 === 0 ? 'bg-[#F4F1DE]/50' : 'bg-transparent'
          }`}
        >
          <span className="font-inter text-sm text-[#2D2D2D] tracking-[0.02em]">
            {item.service}
          </span>
          <span className="font-cormorant text-lg text-[#C1666B] font-[500] tracking-[0.05em]">
            {item.price}
          </span>
        </div>
      ))}
    </motion.div>
  )
}

function ChildrenTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#E8E4CF]">
            <th className="py-4 px-4 text-left font-inter text-xs tracking-[0.12em] uppercase text-[#2D2D2D]/60">
              Age Group
            </th>
            <th className="py-4 px-4 text-center font-inter text-xs tracking-[0.12em] uppercase text-[#2D2D2D]/60">
              Boys
            </th>
            <th className="py-4 px-4 text-center font-inter text-xs tracking-[0.12em] uppercase text-[#2D2D2D]/60">
              Girls
            </th>
          </tr>
        </thead>
        <tbody>
          {CHILDREN_PRICES.map((row, i) => (
            <tr
              key={row.ageGroup}
              className={`border-b border-[#E8E4CF] ${
                i % 2 === 0 ? 'bg-[#F4F1DE]/50' : 'bg-transparent'
              }`}
            >
              <td className="py-4 px-4 font-inter text-sm text-[#2D2D2D]">
                {row.ageGroup}
              </td>
              <td className="py-4 px-4 text-center font-cormorant text-lg text-[#C1666B] font-[500]">
                {row.boys}
              </td>
              <td className="py-4 px-4 text-center font-cormorant text-lg text-[#C1666B] font-[500]">
                {row.girls}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}
