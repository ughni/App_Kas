
import Dashboard from "./wishlist/page";
interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export default async function Home(props: HomeProps) {
  return(

    <Dashboard searchParams={props.searchParams} />
  )
}
