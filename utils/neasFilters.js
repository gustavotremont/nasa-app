const filterByOrbitalClass = (neas, orbitalClass) => neas.filter(nea => nea.orbit_class === orbitalClass)

const filterByDateRange = (neas, from, to) => {
    if (from && to) {
        neas = neas.filter(nea => nea.discovery_date >= from && nea.discovery_date <= to+1)
    } else if (from) {
        neas = neas.filter(nea => nea.discovery_date >= from)
    } else if (to) {
        neas = neas.filter(nea => nea.discovery_date <= to+1)
    }

    return neas
}

const neasFilters = {
    filterByOrbitalClass,
    filterByDateRange
}

module.exports = neasFilters