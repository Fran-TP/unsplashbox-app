import PlusIcon from '../icons/plus'

export const AddPhoto = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-between gap-2 px-6 text-light/80 dark:bg-gray-800 p-2 rounded transition-colors duration-200 ease-in"
    >
      <PlusIcon className="size-5 stroke-2" /> Add to collection
    </button>
  )
}
