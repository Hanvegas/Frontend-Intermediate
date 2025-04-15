const FormCard = ({ children, handleSubmit }) => {
      return (
            <form onSubmit={handleSubmit} className="w-[306px] min-h-[452px] p-6 sm:w-[529px] sm:min-h-[778px] sm:p-10 bg-[rgba(24,26,28,0.84)] rounded-lg sm:rounded-2xl">
                  {children}
            </form>
      )
}

export default FormCard