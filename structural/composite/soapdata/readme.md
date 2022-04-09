# Soap data

When dealing with a soap data http response, sometimes you can get an object,
sometimes you can get an array and sometimes you get null.

You get an object when there was only one record, an array if there were many records and null if there was nothing. null maybe represented by the soap data not being present in the http response.

You have to design an interface that seamlessy handles these conditions. The interface should be able to present this data in form of an array that may be empty, contain one record on many records.

