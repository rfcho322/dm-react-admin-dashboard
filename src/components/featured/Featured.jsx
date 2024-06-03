import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ChevronDown, ChevronUp, EllipsisVertical } from "lucide-react"

const Featured = () => {
  return (
    <div className="bg-card col-span-4 sm:col-span-2 lg:col-span-1 shadow-lg rounded-xl p-3 self-start">
        {/* TOP */}
        <div className="flex justify-between items-center px-2">
            <h1 className="text-lg font-bold text-card-foreground">Total Revenue</h1>
            <EllipsisVertical className='w-5 h-5' />
        </div>
        {/* BOTTOM */}
        <div className='flex flex-col justify-center items-center gap-4 p-5'>
            {/* FEATURED CHART */}
            <div className='mx-auto w-32 h-32'>
                <CircularProgressbar value={70} text={"70%"} strokeWidth={8} 
                    styles={buildStyles({
                        pathColor: "#c084fc",
                        textColor: "#a855f7",
                    })}
                />
            </div>
            <p className='text-lg text-card-foreground/95'>Total sales made today</p>
            <p className='text-3xl text-card-foreground'>$420</p>
            <p className='text-sm text-card-foreground/50 text-justify'>Processing past transactions. Note that recent payments might not be included.</p>
            {/* SUMMARY */}
            <div className='flex items-center justify-between w-full'>
                {/* ITEM 1 */}
                <div className='flex flex-col justify-center items-center'>
                    {/* ITEM TITLE */}
                    <div className='text-sm text-gray-400'>Target</div>
                    {/* ITEM RESULT */}
                    <div className='flex items-center mt-2 text-sm text-green-500'>
                        {/* ITEM AMOUNT */}
                        <ChevronUp className='w-5 h-5'/>
                        <div className='font-semibold'>$20.8k</div>
                    </div>
                </div>
                {/* ITEM 2 */}
                <div className='flex flex-col justify-center items-center'>
                    {/* ITEM TITLE */}
                    <div className='text-sm text-gray-400'>Last Week</div>
                    {/* ITEM RESULT */}
                    <div className='flex items-center mt-2 text-sm text-green-500'>
                        {/* ITEM AMOUNT */}
                        <ChevronUp className='w-5 h-5'/>
                        <div className='font-semibold'>$120.4k</div>
                    </div>
                </div>
                {/* ITEM 3 */}
                <div className='flex flex-col justify-center items-center'>
                    {/* ITEM TITLE */}
                    <div className='text-sm text-gray-400'>Last Month</div>
                    {/* ITEM RESULT */}
                    <div className='flex items-center mt-2 text-sm text-red-500'>
                        {/* ITEM AMOUNT */}
                        <ChevronDown className='w-5 h-5'/>
                        <div className='font-semibold'>$15.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured