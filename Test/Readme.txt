splitTestsBetweenCapabilities: true,
    multiCapabilities: [{
        browserName: 'chrome',
        count: 2,
        'chromeOptions': {
                   'args': ['disable-infobars',
                         // "--headless", "--disable-gpu",
                ]
            },
       
    }],
