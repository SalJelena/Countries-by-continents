const Select = (options)=>{ 
    options = new Set(options)

    const select = document.createElement('select')

    const defOpt = document.createElement('option')
    defOpt.value = '-1'
    defOpt.selected = true
    defOpt.disabled = true
    defOpt.hidden = true
    defOpt.textContent = 'Choose region'

    select.append(defOpt)

    options.forEach(option => {
        const opt = document.createElement('option')
        opt.value = option
        opt.textContent = option ? option : 'Other'
        select.append(opt)
    });

    return select
}

export default Select