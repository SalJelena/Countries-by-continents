export function compareByCapital(a, b) {
    if(a.capital < b.capital) {
        return -1
    }
    if(a.capital > b.capital) {
        return 1
    }
    return 0
}

export function compareByRegion(a, b) {
    if(a.region < b.region) {
        return -1
    }
    if(a.region > b.region) {
        return 1
    }
    return 0
}