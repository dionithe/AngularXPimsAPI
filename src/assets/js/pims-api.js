/* PIMS API */

const myInit = {
  method: "GET",
  headers: {
    Authorization: "Basic " + btoa("sandbox:c5jI1ABi8d0x87oWfVzvXALqkf0hToGq"),
  },
  queries: { page_size: 4 },
};

/**
 *  Renvoi un tavbleau d'évènement en fonction de la ville
 *
 * @param   {string} city
 * @returns {array}  liste d'évènements
 */
async function getEventsInCity(city) {
  const myRequest = new Request(
    "https://sandbox.pims.io/api/v1/events?" +
      new URLSearchParams({
        page_size: 4,
        venue_city: city,
        expand: "*",
        from_datetime: new Date(new Date().toString().split("GMT")[0] + " UTC")
          .toISOString()
          .split(".")[0],
      })
  );
  const reponse = await fetch(myRequest, myInit)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        new Error(response.statusText);
      }
    })
    .then((data) => {
      return data._embedded.events;
    });
  return reponse;
}

/**
 * Renvoi les informations de l'évènement demandé
 *
 * @param {int} eventId
 * @returns {array}
 */
async function getEventById(eventId) {
  const myRequest = new Request(
    "https://sandbox.pims.io/api/v1/events/" +
      eventId +
      "?" +
      new URLSearchParams({
        expand: "*",
      })
  );
  const reponse = await fetch(myRequest, myInit)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        new Error(response.statusText);
      }
    })
    .then((data) => {
      return data;
    });
  return reponse;
}

/**
 * Renvoi les informations des ventes de l'évenèment
 *
 * @param {int} eventId
 * @returns {array}
 */
async function getTicketCountsByEventId(eventId) {
  const myRequest = new Request(
    "https://sandbox.pims.io/api/v1/events/" +
      eventId +
      "/ticket-counts?" +
      new URLSearchParams({
        page_size: 1,
      })
  );
  const reponse = await fetch(myRequest, myInit)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        new Error(response.statusText);
      }
    })
    .then((data) => {
      return data._embedded.ticket_counts[0].sales;
    });
  return reponse;
}

/**
 * Renvoi la liste d'évènements futur correspondant aux critères de recherche
 *
 * @param {string} filter "champ" de recherche, valeurs possibles : "artist", "place"
 * @param {string} search valeur de la recherche
 */
async function getEventsBySearch(filter = "label", search) {
  let params = {
    page_size: -1,
    expand: "*",
    from_datetime: new Date(new Date().toString().split("GMT")[0] + " UTC")
      .toISOString()
      .split(".")[0],
  };
  params[filter] = search;

  const myRequest = new Request(
    "https://sandbox.pims.io/api/v1/events?" + new URLSearchParams(params)
  );

  const reponse = await fetch(myRequest, myInit)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        new Error(response.statusText);
      }
    })
    .then((data) => {
      return data._embedded.events;
    });
  return reponse;
}
