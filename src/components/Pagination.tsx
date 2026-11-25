interface PaginationProps{
    page:number
    totalPages:number 
    onChange:(page:number)=>void
}

export default function Pagination({page, totalPages, onChange}:PaginationProps){
    return(
        <div className="flex item-centers justify-center gap-4">
            <button disabled={page<1} onClick={()=> onChange(page-1)}>Anterior</button>
                <span>Pagina {page} de {totalPages}</span>
            <button disabled={page>totalPages}onClick={()=>onChange(page+1)}>Siguiente</button>
        </div>
    )
}