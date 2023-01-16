import {IconBrandTwitter} from "@tabler/icons"

export default function App() {
  return (
    <div className="min-h-screen grid place-content-center bg-gray-300">
      <div className="flex flex-col justify-center items-center border border-1 rounded-xl p-3 gap-y-5 bg-white">
        <h1 className="text-2xl text-center">
          Learn React 
        </h1>
        <span className="text-sm max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur reprehenderit commodi?
        </span>
        <div className="flex gap-x-2">
          <Btn text='Register'></Btn>
          <Btn onClick={()=> console.log('twitter')} className="bg-blue-300">
            <IconBrandTwitter className="w-5 h-5 stroke-1"/>
            Login with Twitter
          </Btn>
        </div>
      </div>
      </div>
  )
}

function Btn (props) {
  const {children, text } = props
  return (
    <button {...props} className='flex flex-row justify-center items-center gap-1 h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900'>
      {text ||children}
    </button>
  )
}