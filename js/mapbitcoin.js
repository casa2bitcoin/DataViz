				
							mapboxgl.accessToken = 'pk.eyJ1IjoicGV0aXRlc2ZsZXVycyIsImEiOiJjamZzaHk0MnQxeHJzMnlwbXBtYzNmcjE4In0.pV-ZpadIwTOoRy4v06640g';

							var map = new mapboxgl.Map({
							    container: 'map',
							    style: 'mapbox://styles/mapbox/streets-v9',
							    center: [2.363003, 48.8712],
							    zoom: 12.25
							});

							map.on('load', function() {
						    // Add a layer showing the bitcoin places
						    map.addLayer({
						        "id": "places",
						        "type": "symbol",
						        "source": {
						            "type": "geojson",
						            "data": {
						                "type": "FeatureCollection",
						                "features": [{
						                    "type": "Feature",
						                    "properties": {
						                        "description": " <b>La Maison du Bitcoin</b> <p><a href=\"https://lamaisondubitcoin.fr\" target=\"_blank\" title=\"Opens in a new window\">La Maison du Bitcoin</a> Un lieu unique à Paris dédié aux crypto-monnaies. Découvrir, comprendre, acheter et vendre plus de 250 crypto-monnaies. <br/> 35 Rue du Caire, 75002 Paris, +33 (0)1 53 00 92 60</p>",
						                        "icon": "castle"
						                    },
						                    "geometry": {
						                        "type": "Point",
						                        "coordinates": [2.3500, 48.8677]
						                    }
						                }, {
						                    "type": "Feature",
						                    "properties": {
						                        "description": "<b>Le boulevard du bictoin</b> <p> Une 20ène de boutiques de la galerie commerçante Passage du Grand-Cerf acceptent le bitcoin. Parmi celles-ci, citons notamment la boutique 'De Marseille et d'ailleurs', le magasin de décoration 'Rickshaw' ou le commerce de vêtements 'Glasscove'. <br/>Passage du Grand-Cerf, 75002 Paris</p>",
						                        "icon": "shop"
						                    },
						                    "geometry": {
						                        "type": "Point",
						                        "coordinates": [2.348557, 48.864878]
						                    }
						                }, {
						                    "type": "Feature",
						                    "properties": {
						                        "description": "<b>Le Picotin</b> <p><a href=\"http://www.restaurant-picotin.fr/\" target=\"_blank\">Le Picotin</a>, une des rares tables parisiennes qui acceptent le bitcoin. En plus, au Picotin tout est fait maison, cuisiné sur place à partir de produits frais uniquement. Le menu change très souvent et varie en fonction des arrivages du marché et de l'humeur du Chef. <br/> 35 Rue Sibuet, 75012 Paris, +33 (0)1 46 28 99 00 </p>",
						                        "icon": "restaurant"
						                    },
						                    "geometry": {
						                        "type": "Point",
						                        "coordinates": [2.402186, 48.843437]
						                    }
 										}, {
						                    "type": "Feature",
						                    "properties": {
						                        "description": "<b>L'Atelier de l'Ephemere</b> <p><a href=\"http://www.restaurant-picotin.fr/\" target=\"_blank\">L'Atelier de l'Ephemere</a>, fleuriste et décorateur floral. <br/> 10 Rue Jeanne d'Arc, 75013 Paris, +33 (0)1 45 85 14 14 </p>",
						                        "icon": "garden"
						                    },
						                    "geometry": {
						                        "type": "Point",
						                        "coordinates": [2.369574, 48.829328]
						                    }
						                }, {
						                    "type": "Feature",
						                    "properties": {
						                        "description": "<b>Le Sof’s Bar </b> <p><a href=\"https://www.reserverunbar.fr/paris/sof-s-bar/\" target=\"_blank\">Le Sof’s Bar</a>, situé au sein de la rue Saint-Sauveur, ce bar atypique vous accueille pour des afterworks entre amis pour découvrir et déguster de superbes cocktails. Le premier mercredi du mois, la communauté bitcoin se rassemble dans cet établissement.<br/> 43 Rue Saint-Sauveur, 75002 Paris, +33 (0)6 73 29 15 17 </p>",
						                        "icon": "bar"
						                    },
						                    "geometry": {
						                        "type": "Point",
						                        "coordinates": [2.348005, 48.866093]
						                    }
						                    }, { "type": "Feature",
						                    "properties": {
						                        "description": "<b>Chez Gusto Bar à Pizza</b> <p><a href=\"http://www.chezgusto.fr/\" target=\"_blank\">Chez Gusto Bar à Pizza</a>: plus qu’un restaurant, Chez Gusto est un endroit de convivialité et de partage qui vit avec son quartier. C’est le commerce d’un petit village, au plein coeur d’un Paris tourbillonnant. Son pari c’est de créer du lien social, de réunir les gens autour d’une bonne pizza, de les accueillir avec le sourire en toute simplicité. Chez Gusto ils sont chez eux!<br/> 12 Rue Jouffroy d'Abbans, 75017 Paris, +33 (0)1 47 64 80 44 </p>",
						                        "icon": "restaurant"
						                    },
						                    "geometry": {
						                        "type": "Point",
						                        "coordinates": [2.312374, 48.886972]
						                    }
                                   		}, { "type": "Feature",
					                    "properties": {
					                        "description": "<b>Vert lézard</b><p><a href=\"www.yelp.fr/biz/vert-l%C3%A9zard-paris-2/\" target=\"_blank\">Vert lézard</a>: fleurs de saison, champêtres, roses, plantes fleuries pour soi ou pour offrir. vente sur place de 17h30 à 20h et livraison sur Paris (+10€).<br/> 5 rue Beaurepaire, 75010 Paris, +33 (0)6 61 25 60 66</p>",
					                        "icon": "garden"
					                    },
					                    "geometry": {
					                        "type": "Point",
					                        "coordinates": [2.363244, 48.869286]
					                    }
                                   		}, { "type": "Feature",
					                    "properties": {
					                        "description": "<b>O'Caire</b><p><a href=\"https://www.yelp.fr/biz/o-caire-paris\" target=\"_blank\">O'Caire</a>; c'est ce nouveau petit bar en plein coeur du Sentier. Marie et Eddy vous accueillent tous les jours pour un petit dej, un déjeuner rapide ou un verre entre amis. Endroit cosy, intime et trendy. <br/>34 Rue du Caire, 75002 Paris, +33 (0)1 42 33 07 23 </p>",
					                        "icon": "bar"
					                    },
					                    "geometry": {
					                        "type": "Point",
					                        "coordinates": [2.34975, 48.8679]
					                    }
                                   		}, { "type": "Feature",
					                    "properties": {
					                        "description": "<b>Pizza and Love</b><p><a href=\"http://pizzaandlove.fr/\" target=\"_blank\">Pizza and Love</a> Commander votre pizza en ligne ou par téléphone. Ouvert 7j/ 7 de 11h à 14h et de 19h à 00h. Fermé dimanche midi. <br/>77 Rue de Mouzaïa, 75019 Paris, +33 (0)1 42 00 42 42 </p>",
					                        "icon": "restaurant"
					                    },
					                    "geometry": {
					                        "type": "Point",
					                        "coordinates": [2.397848, 48.8804]
					                    }
                                   		}, { "type": "Feature",
					                    "properties": {
					                        "description": "<b>Nagatomi</b><p><a href=\"https://www.nagatomi.fr/\" target=\"_blank\">Nagatomi</a> est le restaurant japonais de Paris. Sushi, sashimi et maki sont réalisés avec expérience et passion. Livraison à domicile offerte à partir de 15 €. <br/> 6 Rue du Faubourg Poissonnière, 75010 Paris, +33 (0)1 48 24 68 06 </p>",
					                        "icon": "restaurant"
					                    },
					                    "geometry": {
					                        "type": "Point",
					                        "coordinates": [2.347991, 48.871193]
					                    }
                                   		}, { "type": "Feature",
					                    "properties": {
					                        "description": "<b>Le Pas Sage</b><p><a href=\"https://www.privateaser.com/lieu/806-pas-sage/\" target=\"_blank\">Le Pas Sage</a> vous propose un mélange entre une ambiance typique de bar et une atmosphère de salons. Ces deux visages vous permettent de varier les plaisirs et sont particulièrement appréciés par les clients réservant pour un groupe. <br/> 145 Rue Saint-Denis, 75002 Paris, +33 (0)1 40 28 45 60 </p>",
					                        "icon": "restaurant"
					                    },
					                    "geometry": {
					                        "type": "Point",
					                        "coordinates": [2.350091, 48.864669]
					                    }
                                   		}, { "type": "Feature",
					                    "properties": {
					                        "description": "<b>Galerie Art’ et Miss</b><p><a href=\"http://www.art-et-miss.com/\" target=\"_blank\">GArt’ et Miss</a>, galerie d’art parisienne existant depuis 2003 et installée dans le Marais, à 2 pas du Musée Picasso, nous organisons tous les mois des expositions d’art contemporain : peinture, sculpture, photographie, lithographie, dessin, art numérique et art textile y sont représentés. <br/> 14 Rue Sainte-Anastase, 75003 Paris, +33 (0)1 84 17 59 17 </p>",
					                        "icon": "art-gallery"
					                    },
					                    "geometry": {
					                        "type": "Point",
					                        "coordinates": [2.363502, 48.859844]
					                    }
                                   		}, { "type": "Feature",
					                    "properties": {
					                        "description": "<b>Soif d'Ailleurs</b><p><a href=\"http://soifdailleurs.com/ps/\" target=\"_blank\">Soif d’Ailleurs</a>, fruit de la terre et du labeur des hommes, les vins naissent partout, innombrables, captivants, séduisants, différents, variés, aussi peu connus que les terres et les hommes qui leur donnent vie. Soif d’ailleurs vous invite à leur découverte. Vous les goûterez, nous vous les raconterons.<br/> 38 Rue Pastourelle, 75003 Paris, +33 (0)1 40 29 10 82 </p>",
					                        "icon": "alcohol-shop"
					                    },
					                    "geometry": {
					                        "type": "Point",
					                        "coordinates": [2.358909, 48.863139]
					                    }
					                    //
                                   		}, { "type": "Feature",
					                    "properties": {
					                        "description": "<b>Dianmonde</b><p><a href=\"http://dianmonde.com/\" target=\"_blank\">Dianmonde </a> est un bijoutier créateur. Les matériaux utilisés sont de très haute qualité, et les pierres en crystal de chez Swarovski. Toutes les pièces sont signés Diane KIM, styliste de la mode et bijouterie de luxe.<br/> 18 Passage Turquetil, 75011 Paris, +33 (0)7 61 80 22 78 </p>",
					                        "icon": "shop"
					                    },
					                    "geometry": {
					                        "type": "Point",
					                        "coordinates": [2.392798, 48.851939]
					                    }
					                    //
						                }]
						            }
						        },
						        "layout": {
						            "icon-image": "{icon}-15",
						            "icon-allow-overlap": true,
						            "icon-size": 1.8
						        }
						    });

						    // Create a popup, but don't add it to the map yet.
						    var popup = new mapboxgl.Popup({
						        closeButton: false,
						        closeOnClick: false
						    });

						    map.setLayoutProperty('name_fr');
						   

						    map.on('mouseenter', 'places', function(e) {
						        // Change the cursor style as a UI indicator.
						        map.getCanvas().style.cursor = 'pointer';

						        var coordinates = e.features[0].geometry.coordinates.slice();
						        var description = e.features[0].properties.description;

						        // Ensure that if the map is zoomed out such that multiple
						        // copies of the feature are visible, the popup appears
						        // over the copy being pointed to.
						        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
						            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
						        }

						        // Populate the popup and set its coordinates
						        // based on the feature found.
						        popup.setLngLat(coordinates)
						            .setHTML(description)
						            .addTo(map);
						    });

						    map.on('mouseleave', 'places', function() {
						        map.getCanvas().style.cursor = '';
						        popup.remove();
						    });
							});

							// Add zoom and rotation controls to the map.
							map.addControl(new mapboxgl.NavigationControl());



							// Tiens, et si j'utilisais mes bitcoins pour faire une bonne action? Le Samu social de Paris 
					