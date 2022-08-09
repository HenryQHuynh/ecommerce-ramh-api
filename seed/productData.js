const productsData = [
    {
        title: "Venom vs.Carnage",
        publisher: "Marvel",
        imageLink: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302928476_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D",
        description:`What's worse than one mayhem-producing symbiote? Two. What's worse than that? Three. That's right: Venom's offspring, Carnage, is about to have a baby itself - a creature of indescribable power and appetites. Question is, who's gonna bring up the baby? Quick - someone call Spider-Man! Guest starring Black Cat! Collecting VENOM VS. CARNAGE (2004) #1-4.`,
        price:12.99
        
    },
    {
        title: "Marvel - Verse: Loki" ,
        publisher: "Marvel",
        imageLink: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302930820_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
        description:`He's the most deceptive deity in the Marvel-Verse — whether he's playing the villain, the hero or just an agent of chaos! He’s Loki — and these are some of his legendary stories! In an all-time classic, Loki pits his brother Thor against the Silver Surfer for a cosmic battle royale! Then, take a fresh view of the founding of the accursed Avengers, through the eyes of the God of Lies responsible for assembling them! On the trail of a sinister sorceress, Loki finds an unlikely ally in none other than Spider-Man — and ends up in the webslinger’s debt! And when the rejuvenated Trickster turns over a new leaf, Kid Loki will learn exactly what his fellow Asgardians think of him!
        COLLECTING: Amazing Spider-Man (1999) 503-504, Journey Into Mystery (2011) 626.1; material from Avengers (1963) 300, Silver Surfer (1968) 4`,
        price:9.99
    },
    {
        title: "X-Men Adventures" ,
        publisher:"Marvel",
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302912116_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`Meet Marvel's mutant heroes, the uncanny X-Men! They may be a little different, but they'll still fight to save a world that hates and fears them! Charles Xavier has gathered Cyclops, Marvel Girl, Beast, Angel and Iceman to his private school-slash-mutant super hero training facility - just in time to face the villainous Magneto, Master of Magnetism! Then, join the X-Men in action against the Mimic - who can copy all their incredible powers! Then, a new generation of X-Men, including Phoenix, Wolverine and Storm, must face a truly galactic threat! As the world trembles and the sky starts to boil, Professor X attempts a desperate rescue mission - but the Knights of Hykon won't be stopped! Sit down and strap in for out-of-this-world adventures with the X-Men!`,
        price:9.99
    },
    {
        title:"Ultimate Comics Spider-Man, Volume 1" ,
        publisher:"Marvel",
        imageLink: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780785157137_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D",
        description:`The year's most talked about story! Miles Morales IS the new Spider-Man! What's the secret behind his powers, and how will he master them? What new and familiar enemies will rise to challenge this all-new Spider-Man? And will Miles live up to Peter Parker's legacy?`,
        price:19.99
    },
    {
        title: "Amazing Spider-Man: Beyond Vol. 4",
        publisher: "Marvel",
        imageLink: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302932596_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
        description:`The huge finale of “Beyond” is here! Ben Reilly, the Beyond Corporation's officially licensed and sponsored Spider-Man, has been put through more than any webslinger before him — and now he teeters on the edge of a very deep chasm. Can Peter Parker fight his way back from death's door in time to help Ben defeat the horrors that lurk behind Door Z? And if so…what lies beyond Beyond?!`,
        price:19.99
    },
    {
        title: "Death Of Doctor Strange Companion",
        publisher: "Marvel",
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302933104_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`Doctor Strange is dead! And without Earth's Sorcerer Supreme to hold back the darkness at the edges of reality, the world is suddenly under siege from all kinds of mystical threats. Now, as an unexpected investigator races the clock to solve Doctor Strange's murder, it's up to the rest of the heroes of the Marvel Universe — from Spider-Man to Blade to White Fox, plus the students of the Strange Academy and an uncanny alliance between the X-Men and Black Knight — to pick up the shattered pieces! Can they combat magical incursions and keep the Earth safe while the mystery is unraveled?`,
        price:24.99
    },
    {
        title:"Wolverine: Weapon X - Gallery Edition" ,
        publisher: "Marvel",
        imageLink: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302933951_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D",
        description:`Wolverine does it best`,
        price:44.99
    },
    {
        title: "Marvelocity: The Marvel Comics Art of Alex Ross ",
        publisher:"Marvel" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781524747923_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`Thirteen years after his Eisner Award-winning, nationally best-selling Mythology--here is the long-awaited Marvel Comics counterpart, a retrospective celebration of the other half of the comics galaxy that is currently ruling the world: Spider-Man, Iron Man, Captain America, Black Panther, the Avengers, the X-Men, Doctor Strange, the Guardians of the Galaxy, and the Fantastic Four. 
        "Alex is a legend. Even if you don't consider yourself a comics-head, you should check out his work to see what the best of the form has to offer." --Ta-Nehisi Coates
         As he did for the DC characters in Mythology, Alex Ross now brings the heroes of the Marvel universe into dynamic life as never before. Marvelocity includes more than 50 never-been-published sketches, paintings, photographs and working models, and other preparatory art, and a 14-panel portfolio gallery of Marvel's most beloved characters. And Ross has written a new 10-page story pitting Spider-Man against the Sinister Six--the webslinger's most popular villains--that ends with a stunning twist.`,
        price:50.00
    },
    {
        title:"Marvel's Black Widow Prelude" ,
        publisher:"Marvel" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302921088_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`From spy to Avenger, the enigmatic Black Widow has lived many secret lives. But how do these disparate episodes add up to the life of the heroic Avenger, and what is the thread connects her past to her future? Get ready for the solo film Marvel's Black Widow with this glimpse into the storied history of Natasha Romanoff in this story set in the Marvel Cinematic Universe!`,
        price:13.49
    },
    {
        title:"Marvel Comics Library. Spider-Man. Vol. 1. 1962-1964",
        publisher:"Marvel" ,
        imageLink: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9783836582339_p0_v9_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
        description:`When Stan Lee first pitched the idea of Spider-Man in 1962, his boss was full of objections: People hate spiders. Teenagers aren't lead characters; they're sidekicks. He should be glamorous and successful, not a friendless loser. But Stan persisted and Martin Goodman let him give the unlikely hero a tryout in Amazing Fantasy, which was already slated for cancellation. With Spider-Man on the cover, No. 15 shot to the top of Marvel's best-seller list for the year, and the rest is history.
        Amazing Spider-Man, which debuted seven months later, broke the comics mold. Peter Parker lived in uncool Queens, was always broke, continually worried about his Aunt May, was unlucky in love, and was constantly getting yelled at by his boss, Daily Bugle publisher J. Jonah Jameson. Spider-Man had the quips and confidence that Parker lacked, but learning to use his powers wasn't always easy. He often seemed on the verge of defeat against the rogue's gallery of classic foes that debuted in the first couple of years: Vulture, Doctor Octopus, Sandman, Lizard, Electro, Kraven the Hunter, Mysterio, and the Green Goblin. Much of the credit for Spider-Man's greatness goes to co-creator and artist Steve Ditko, who had a knack for portraying teenagers and their problems. His artwork infused Spider-Man with a loose-limbed energy, and, while maybe everyone was scared of spiders, Ditko made swinging through New York seem like the coolest adventure ever.`,
        price:164.99
    },
    {
        title: "X-Men Red Vol. 1: The Hate Machine",
        publisher:"Marvel",
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302911676_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" ,
        description:`Jean Grey is back - with her own team of X-Men! Reborn into a world she doesn't recognize, Jean gathers allies old and new - including Nightcrawler, Namor and the All-New Wolverine - to face an evil that threatens to tear down Xavier's dream by any means necessary! The red squad must infiltrate a top-secret compound in order to save a mutant they've never met. They'll have to avoid guards armed with high-tech guns, protestors armed with burning hate, and Sentinels armed with...even bigger and more dangerous guns than the guards. All in a day's work for the X-Men! But as battle rages in India, the newest recruit may be the key to the whole team's survival! Gambit fi nds himself caught up the intensifying global frenzy of mutant hate - but could one of Jean's oldest friends turn foe?`,
        price:17.99
    },
    {
        title: "Decades: Marvel in the 60s - Spider-Man Meets the Marvel Universe",
        publisher: "Marvel",
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302916602_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
        description: `Celebrate 80 years of Marvel Comics, decade by decade - and see how Spider-Man became an icon of the (Web) Swinging Sixties! The ever-sociable wallcrawler helped build the connected Marvel Universe we know and love with these early team-ups (and tussles) with his fellow heroes - beginning with his bid to join the Fantastic Four! Witness the beginnings of Spidey's amazing friendships with the Human Torch and Daredevil -and his fi rst run-ins with the Hulk, Avengers, X-Men and more! Plus, the legendary Steve Ditko unites his signature characters, Spider-Man and Doctor Strange!`,
        price:24.99
    },
    {
        title: "Scarlet Witch Vol. 3: The Final Hex",
        publisher: "Marvel",
        imageLink: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302902667_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D",
        description:`The SCARLET WITCH travels to SERBIA to dive deep into her Romany roots! Who were her parents? Where does she come from? Wanda will discover the answers...and seek her revenge!` ,
        price:15.99 
    },
    {
        title: "Captain America Epic Collection: The Bloodstone Hunt",
        publisher:"Marvel" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302933913_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`Steve Rogers is back in the red, white and blue! With his familiar shield back on his arm, Steve battles alongside Nick Fury and takes on the Supreme Soviets! But his return to the mantle of Cap may be brought to a swift end as he struggles to survive Mother Night's camp of hate - while transformed into a scrawny teenager! And the erstwhile Cap, John Walker, makes his return as the take-no-prisoners U.S.Agent! Then, a truly classic caper begins as Baron Zemo targets the powerful Bloodstone - and Cap joins the hunt along with Diamondback! She's a foe turned friend - but could she be more? Before the saga is over, they'll face Batroc's Brigade, cannibals, sharks, snakes and even mummies! Plus, Crossbones targets Diamondback, Sub-Mariner goes wild and Magneto nearly kills the Red Skull!` ,
        price:44.99 
    },
    {
        title:"Reign of X Vol. 3" ,
        publisher:"Marvel",
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302931537_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`Difficult reunions in the Reign of X! The Maruaders are rocked by the rematch of the century: Storm vs. Callisto! As Karma and Dani delve deeper into their nightmares, the New Mutants must prepare for the fight of their lives! Still reeling from X OF SWORDS, Cable turns back to the matter of missing mutant babies — a subject he knows a thing or two about! And Wolverine returns to Madripoor for an ` ,
        price:17.99 
    },
    {
        title: "Ghost Rider By Daniel Way: The Complete Collection" ,
        publisher:"Marvel" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302497095_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`Collecting Ghost Rider (2006) #1-19. Once upon a time, Johnny Blaze made a deal with the Devil - and to no one's surprise but his own, he got shafted. Now trapped in hell, with the Spirit of Vengeance bonded to his immortal soul and weighing him down, Johnny may have finally found a way out. But at what cost? From the depths of Hell to the glittering spires of Heaven, the Ghost Rider rides again, blazing new trails and dispensing fiery vengeance in his wake. The demonic team of Daniel Way, Mark Texeira and Javier Saltares reunite to put ol' Flamehead back in the saddle where he belongs. Ready or not, here he comes!` ,
        price:14.99 
    },
    {
        title:"Thor Epic Collection: The Final Gauntlet" ,
        publisher:"Marvel" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302930882_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`The return of Thor! The true Odinson has been located at last, and the end of Eric Masterson's time as the God of Thunder draws near — but will Bloodaxe be his executioner? Or will the cost of freeing the original Thor prove too much to bear's Thor shall battle Thor…and a new heroic legacy awaits! Then, a mighty quest begins for the Odinson — but something is not right! Can Beta Ray Bill stand in the way of an increasingly unbalanced Thunder God? Thor brutally battles the Super-Skrull, Drax and Pluto as the Infinity Crusade rocks the Marvel Universe! Plus, hold your hammers high as the Thor Corps reunite! Can Dargo Ktor, Beta Ray Bill and Thunderstrike put their differences aside in time to knock Zarrko the Tomorrow Man into next week?` ,
        price:39.99 
    },
    {
        title:"Incredible Hulk by Peter David Omnibus Vol. 3" ,
        publisher:"Marvel" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781302929145_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`Peter David's fan-favorite run continues, as the Hulk gets an unexpected promotion to leader of the Pantheon! But will their immortal infighting weigh him down? As Rick Jones struggles to save Marlo’s life, the Hulk faces threats from Juggernaut to Venom, takes on S.H.I.E.L.D. in a very personal mission, and fights the interstellar Troyjan War! But his greatest enemy just might be his own future. In a nightmarish dystopia decades away, the despotic Maestro rules with a familiar, gamma-powered fist! And when rage overpowers the Hulk, can he cope with a brand new wrinkle in the Banner/Hulk relationship? All this and the wedding of the century!` ,
        price:125.99 
    },
    {
        title:"Batman vs. The Joker (B&N Exclusive Edition)" ,
        publisher:"DC Comics" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781779501448_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`THE WORLD'S GREATEST DETECTIVE TAKES ON THE CLOWN PRINCE OF CRIME!Of all the villains that threaten Gotham City, none is more dangerous—or more persistent—than the Harlequin of Hate himself, the Joker!
        As Batman's oldest and deadliest foe, this mirthful maniac has served as a fearsome foil to the stoic Dark Knight for decades—and become public enemy number one in the process!
        More deranged, murderous and resourceful than all of Gotham's other rogues put together, the Joker won't quit until the entire world sinks with him into insanity—something that Batman will never allow!
        Neither one will rest until the other is defeated—and so the battle continues!` ,
        price:3.00 
    },
    {
        title:"DC Comics Coloring Book",
        publisher:"DC Comics" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781608878291_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" ,
        description:`This action-packed adult coloring book is filled with ready-to-color illustrations of the most iconic characters from DC Comics history. From the bright red and blue of Superman soaring over Earth to the rich greens and yellows of Wonder Woman's homeland, Themyscira, the heraldry of the Super Heroes is yours to design and color. Featuring many of the greatest artists in DC Comics history and their interpretations of Batman, Superman, Wonder Woman, and more, this incredible coloring book offers hours of creative fun and relaxation. ` ,
        price:15.99
    },
    {
        title:"Batman, Volume 1: The Court of Owls (The New 52)" ,
        publisher:"DC Comics" ,
        imageLink: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781401235420_p0_v110_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
        description:`After a series of brutal murders rocks Gotham City, Batman begins to realize that perhaps these crimes go far deeper than appearances suggest. As the Caped Crusader begins to unravel this deadly mystery, he discovers a conspiracy going back to his youth and beyond to the origins of the city he's sworn to protect. 
        Batman has heard tales of Gotham City's Court of Owls: that the members of this powerful cabal are the true rulers of Gotham. The Dark Knight dismissed the stories as rumors and old wives' tales. Gotham was his city. Until now. 
        A brutal assassin is sinking his razor-sharp talons into the city's best and brightest, as well as its most dangerous and deadly. If the dark legends are true, his masters are more powerful predators than the Batman could ever imagine.This now-classic graphic novel from the #1 New York Times bestselling creative team of Scott Snyder and Greg Capullo is not just fantastic jumping-on point for any new reader, but one of the great Batman stories ever told. With every year that passes, this masterpiece becomes more entrenched into this medium's pantheon of the greatest stories ever told.` ,
        price:14.99
    },
    {
        title:"Justice League Dark Vol. 1: In the Dark (The New 52)" ,
        publisher:"DC Comics" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781401237042_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D" ,
        description:`As a part of the acclaimed DC Comics - The New 52 event of September 2011, a new type of super-team must come together when supernatural forces threaten the DCU - Justice League Dark!
        The witch known as The Enchantress has gone mad, unleashing a wave of chaos that not even the combined powers of Superman, Batman, Wonder Woman and Cyborg can stop. Shade the Changing Man, Madame Xanadu, Deadman, Zatanna, Mindwarp and John Constantine may be our only hope - but how can we put our trust in beings whose very presence makes ordinary people break out in a cold sweat? Critically acclaimed writer Peter Milligan brings together an unorthodox team for the most unnatural threats. With stunning art by up and coming star Mikel Janin, Justice League Dark Vol. 1 visits the unexplored corners of the DCU!` ,
        price:14.99 
    },
    {
        title:"Watchmen: Absolute Edition" ,
        publisher:"DC Comics / Allan Moore" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781401207137_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" ,
        description:`A hit HBO original series, Watchmen, the groundbreaking series from award-winning author Alan Moore, presents a world where the mere presence of American superheroes changed history—the U.S. won the Vietnam War, Nixon is still president, and the Cold War is in full effect.
        Considered the greatest graphic novel in the history of the medium, the Hugo Award-winning story chronicles the fall from grace of a group of superheroes plagued by all-too-human failings. Along the way, the concept of the superhero is dissected as an unknown assassin stalks the erstwhile heroes.` ,
        price:125.00 
    },
    {
        title:"DC Comics Presents (1978-) #90" ,
        publisher:"DC Comics" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/2940153298498_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`A space shuttle in distress brings Captain Atom, Firestorm and Superman to the scene, but a man named Rayburn gets to the pilot before anyone else, in "Escape From Solitude!"` ,
        price:1.99 
    },
    {
        title:"The Golden Age of DC Comics" ,
        publisher:"DC Comics" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9783836556569_p0_v8_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`In June of 1938, Action Comics debuted with a new kind of comic-book character on its cover: a costumed man with two identities, who possessed extraordinary strength and powers—a man able to protect the public when ordinary measures would not do. He was not the first super hero, but the Man of Steel would become the prototype for all super heroes thereafter.
        Superman's story, and those of Batman, Wonder Woman, and hundreds of other DC Comics characters, are all told in The Golden Age of DC Comics. Expanded from the Eisner Award-winning XL book, 75 Years of DC Comics, this edition offers readers the ultimate insight on DC's first decades, from its pulp origins up to the comic-book burnings of the McCarthy '50s.
        More than 600 pages of covers and interiors, original illustrations, photographs, film stills, and ephemera bring the story lines, the characters, and their creators to vibrant life. Also included is an exclusive interview with legendary artist Joe Kubert.` ,
        price:21.99 
    },
    {
        title:"The Art of Vintage DC Comics: 100 Postcards (Comic Book Art Postcards, Vintage Bulk Postcards, Cool Postcards for Mailing)" ,
        publisher:"DC Comics" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780811876506_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`Celebrating the 75th anniversary of DC Comics, these 100 all-different postcards feature the incredible art of DC's comic book covers from the 1930s through the 1980s.` ,
        price: 22.95 
    },
    {
        title:"DC Comics: Anatomy of a Metahuman" ,
        publisher:"DC Comics" ,
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781608875016_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B550x10000%5D&sink=format%5Bwebp%5D" ,
        description:`Concerned about the threat that so-called “metahumans” may pose to the world, Batman has begun compiling a detailed dossier on their incredible physiology and abilities. From villains like Killer Croc, Bane, and Brainiac, to Batman's own comrades, including Superman and Cyborg, the file brings together the Dark Knight's fascinating personal theories on the unique anatomical composition of these formidable individuals.
        This stunning and unique book delves into the incredible abilities of DC Comics characters like never before. Using beautifully illustrated anatomical cross sections depicting twelve different DC characters, the book, told from Batman's unique perspective, will explore how these “metahumans” physical makeup differs significantly from that of the average person. From detailed theories on how Superman's eyes shoot heat rays to an in-depth exploration of how Aquaman is able to breathe under water, the book delves into the deepest secrets of these classic characters. Also featuring chapters on the anatomy and abilities of Doomsday, Aquaman, Swamp Thing, Darkseid, Martian Manhunter, and more, this one-of-a-kind book will change the way you look at metahumans forever.` ,
        price:50.00
    },
    {
        title:"DC Comics: Wonder Woman Coloring Book",
        publisher:"DC Comics",
        imageLink:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781608878925_p0_v8_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
        description:`Featuring iconic artwork by renowned comic artists, DC Comics: Wonder Woman Coloring Book includes stunning line art of Wonder Woman’s exciting adventures. 
        This action-packed adult coloring book is filled with ready-to-color illustrations of one of DC Comics" most iconic characters. From the bright red and blue of Wonder Woman’s costume to the rich greens and yellows of her homeland, Themyscira, the heraldry of this Amazonian Super Hero is yours to design and color. Featuring many of the greatest artists in DC Comics history and their interpretations of Wonder Woman’s memorable adventures, this incredible coloring book offers hours of creative fun and relaxation.`,
        price:14.99
    },
    // {
    //     title:,
    //     publisher:,
    //     imageLink:,
    //     description:,
    //     price:,
    // },
    // {
    //     title:,
    //     publisher:,
    //     imageLink:,
    //     description:,
    //     price:,
    // },
    // {
    //     title:,
    //     publisher:,
    //     imageLink:,
    //     description:,
    //     price:,
    // },
    // {
    //     title:,
    //     publisher:,
    //     imageLink:,
    //     description:,
    //     price:,
    // },
    // {
    //     title:,
    //     publisher:,
    //     imageLink:,
    //     description:,
    //     price:,
    // },
    // {
    //     title:,
    //     publisher:,
    //     imageLink:,
    //     description:,
    //     price:,
    // },
    // {
    //     title:,
    //     publisher:,
    //     imageLink:,
    //     description:,
    //     price:,
    // },

    
]

module.exports = { productsData };