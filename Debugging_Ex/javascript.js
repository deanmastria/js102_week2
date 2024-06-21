const storeOwners = [                                   //changed properties so the output shows more than 1 name  
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
      totalLocations += storeOwners[i].stores;                                  //removed "let totalLocations", truncated totalLocation = totalLocation + storeOwners.stores to what it is now
    }
    return totalLocations;                                                      //returns totalLocations instead of "i"
  };
  
  let locations = listNumberOfStores();                                        //added (), calls the function and assigns its return value to 'locations'
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?');
    if (locations > 0) {
      console.log('Of course, we have ' + locations + ' stores');
    }
  }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;                                       //corrected access to property, added [i] ( This accesses the i-th element in the storeOwners array)
      let location = storeOwners[i].location;
      let stores = storeOwners[i].stores;
      console.log(`Yes, ${person} has ${stores} in ${location}`);                  //removed 'this' from location, added `` and ${} to person and location
    }
  
  }
  
  tellMeMyStores();
  hasStore();