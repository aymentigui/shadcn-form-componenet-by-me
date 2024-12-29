import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import InputsForm from '../components/many-inputs'



export default function PageInputs() {

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5 flex gap-2 items-center">
                <Link href={"/"}><MoveLeft></MoveLeft></Link> Inputs
            </h1>
            <InputsForm></InputsForm>
        </div>
    )
}

