Design Specifications for Museum Holdings

ReactJS component structure:
  - ItemBox
    - ItemList
      - Item
        -ItemInformation
    - ItemForm


MongoDB document structure:
  Item {
  	"id": random_integer
  	"name": Item_name
  	"origin": location_created
  	"description": Item_description
  	"manufacturer": company_name
  	"manufactureDate": Item_age
  	"significance": historical_impact
  	"related": related_Items
    "ExternalLink": ext_link
        --if available, meantioned in the professors original project description.
  }
  
  
  PHONE FIRST DEV. This is for use in a Museum, Im not whipping out a laptop to check info on a piece.
