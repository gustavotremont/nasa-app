const filterByMinimumMass = (landings, minimumMass) => landings.filter(landing => landing.mass >= minimumMass)

const filterByDateRange = (landings, from, to) => {
    if (from && to) {
        landings = landings.filter(landing => landing.year >= from && landing.year <= to+1)
    } else if (from) {
        landings = landings.filter(landing => landing.year >= from)
    } else if (to) {
        landings = landings.filter(landing => landing.year <= to+1)
    }

    return landings
}

const landingsFilters = {
    filterByMinimumMass,
    filterByDateRange
}

module.exports = landingsFilters