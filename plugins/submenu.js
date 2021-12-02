let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai Kak ${conn.getName(m.sender)}`,
                        "description": "*GROUP SETTINGS*",
                        "buttonText": "KLIK DISINI",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "WELCOME👋",
                                        "description": "mengaktifkan fitur welcome",
                                        "rowId": ".on welcome"
                                        },{
                                    	"title": "OFF WELCOME👋",
                                        "description": "menonaktifkan fitur welcome",
                                        "rowId": ".off welcome"             
                                        },{
                                    	"title": "ANTIBADWORD🚫",
                                        "description": "mengaktifkan fitur antibadword",
                                        "rowId": ".on antibadword"
                                        },{
                                    	"title": "OFF ANTIBADWORD🚫",
                                        "description": "menonaktifkan fitur antibadword",
                                        "rowId": ".off antibadword"
                                        },{
                                    	"title": "ANTILINK❗",
                                        "description": "mengaktifkan fitur antilink",
                                        "rowId": ".on antilink"
                                        },{
                                    	"title": "OFF ANTILINK❗",
                                        "description": `menonaktifkan fitur antilink`,
                                        "rowId": ".off antilink"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = /^(butmenu|btn|submenu)$/i

module.exports = handler