localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
);

const favorites =
JSON.parse(
localStorage.getItem("favorites")
) || [];