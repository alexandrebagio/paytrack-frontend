import { EnvelopeIcon } from '@heroicons/react/16/solid'

interface Props {
  label: string
  name: string
  value: any
  onChange: (e: any) => void
  type?: 'text' | 'number' | 'password' | 'email'
  placeholder?: string
  error?: any
  icon?: any
}

export default function Input(props: Props) {

  const errorClass = props.error ? 'border-red-400 focus:border-red-400' : null;

  return (
    <div className="flex flex-col m-1">
      <label>{props.label}: </label>
      <div className="relative">
        { props.icon ?? null }
        <input type={props.type ?? 'text'}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder ?? ''}
          className={`
            w-full p-2 rounded-lg mt-1
            border focus:border-blue-500 
            focus:bg-white focus:outline-none
            ${errorClass} ${ props.icon ? "pl-8" : null }
        `} />
      </div>
      {props.error ? <div className="text-xs text-red-400 px-1"> {props.error} </div> : false}
    </div>
  )
}