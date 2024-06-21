const storeOwners = [
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "AZ",
    },
    {
      name: 'Jackie Gleason',
      stores: 3,
      location: "NM",
    },
    {
      name: 'Edgar Martinez',
      stores: 1,
      location: "NV",
    },
    {
      name: 'Yugo Slavia',
      stores: 7,
      location: "CA",
    },
  ];
  
  const listNumberOfStores = function () {
    let totalLocations = 0;
    for (let i = 0; i < storeOwners.length; i++) {
      totalLocations += storeOwners[i].stores;
    }
    return totalLocations;
  };
  
  let locations = listNumberOfStores();
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?');
    if (locations > 0) {
      console.log('Of course, we have ' + locations + ' stores');
    }
  }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners.name;
      let location = storeOwners.location;
      console.log(`Yes, ${person} has one in ${location}`);
    }
  
  }
  
  tellMeMyStores();
  hasStore();