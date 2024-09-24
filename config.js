var config = {
    style: 'mapbox://styles/adavis426/cm182zv6k00l001pc79tacv7p',
    accessToken: 'pk.eyJ1IjoiYWRhdmlzNDI2IiwiYSI6ImNsdDNpM2E5bTF4NWYyanBxMDRuZnZ6YjAifQ.LNKVk5F66IaTKY4foTqJ4g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Philadelphia',
    subtitle: 'A review of population growth and cost-burdened areas.',
    byline: 'By Arden Davis',
    image: './houses-pic.svg',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'full',
            hidden: false,
            title: 'Movement',
            // image: './path/to/image/source.png',
            description: 'During the Pandemic, about 50,000 left the city. However that doesn’t mean there hasn’t been a change in the makeup of the neighborhood’s populations. ',
            location: {
                center: [-75.15755, 40.02],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'movement',
                    opacity: 0.6,
                    duration: 1000
                },
                {
                    layer: 'area-labels',
                    opacity: 0.6,
                    duration: 1000
                },
                {layer: 'outlines',
                    opacity: 0.6,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'movement',
                    opacity: 0,
                    duration: 0
                },
                   {layer: 'area-labels',
                    opacity: 0,
                    duration: 1
                },
                {layer: 'outlines',
                    opacity: 0,
                    duration: 1
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'full',
            hidden: false,
            title: 'Cost of Rent',
            // image: './path/to/image/source.png',
            description: 'The average cost of rent in each of these places differs greatly.',
            location: {
                 center: [-75.15755, 40.02],
                zoom: 10,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
             onChapterEnter: [
                {
                    layer: 'movement',
                    opacity: 0,
                    dduration: 0
                },
                {
                    layer: 'rent',
                    opacity: 0.6,
                    duration: 0
                },
                {layer: 'area-labels',
                    opacity: 0.6,
                    duration: 1
                },
                {layer: 'outlines',
                    opacity: 0.6,
                    duration: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'movement',
                    opacity: 0.6
                },
                {  layer: 'rent',
                    opacity: 0
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'full',
            hidden: false,
            title: 'Rent Changes',
            description: 'But it didn’t always cost this much',
            location: {
                 center: [-75.15755, 40.02],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
                       onChapterEnter: [
                {
                    layer: 'movement',
                    opacity: 0.6
                },
                {
                    layer: 'rent',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'movement',
                    opacity: 0
                },
                {  layer: 'rent',
                    opacity: 0.6
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'full',
            hidden: false,
            title: 'Cost Burden',
            // image: './path/to/image/source.png',
            description: 'As it becomes more expensive to live in these areas, people in these areas are becoming increasingly cost burdened.',
            location: {
                 center: [-75.15755, 40.02],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
                       onChapterEnter: [
                {
                    layer: 'movement',
                    opacity: 0
                },
                {
                    layer: 'rent',
                    opacity: 0.6
                },
                   {layer: 'area-labels',
                    opacity: 0.6,
                    duration: 1
                },
                {layer: 'outlines',
                    opacity: 0.6,
                    duration: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'movement',
                    opacity: 0.6
                },
                {  layer: 'rent',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fifth-identifier',
            alignment: 'full',
            hidden: false,
            title: 'Cost Burden',
            // image: './path/to/image/source.png',
            description: 'With the current distribution of housing, we need 2x the amount of low-income housing. Here is where affordable housing is being placed.',
            location: {
                 center: [-75.15755, 40.02],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
                       onChapterEnter: [
                {
                    layer: 'movement',
                    opacity: 0.6
                },
                {
                    layer: 'rent',
                    opacity: 0
                },
                   {layer: 'area-labels',
                    opacity: 0.6,
                    duration: 1
                },
                {layer: 'outlines',
                    opacity: 0.6,
                    duration: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'movement',
                    opacity: 0
                },
                {  layer: 'rent',
                    opacity: 0.6
                }
            ]
        }
    ]
};
