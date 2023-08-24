import Link from 'next/link'
import { Skeleton } from '@/shared'
export default function Home() {
  return (
    <div className="my-4">
      Hello World <Link href="/dashboard">go to test lorem</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
        {Array(50)
          .fill(1)
          .map((item) => {
            return <Skeleton key={Math.random()} />
          })}
      </div>
    </div>
  )
}
