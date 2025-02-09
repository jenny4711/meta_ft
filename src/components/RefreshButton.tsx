

"use client"
import { revalidatePath,revalidateTag } from 'next/cache';
import { refreshData } from '@/utlis/apis';
export default function RefreshButton() {
  return (
    <button onClick={() => refreshData()}>
      Refresh
    </button>
  )
}