import { Exercises } from '../models/Exercises'
import { ThemeId } from '../models/ThemeId'

export const exercises: { [key in ThemeId]: Exercises } = {
  presentSimple: [
    'I [live] (live) in London.',
    'She [works] (work) in a restaurant.',
    'Lisa [reads] (read) a book every night before she [goes] (go) to bed.',
    'Tom [works] (work) in a factory and [lives] (live) in the city.',
    'They [play] (play) soccer every weekend unless it [rains] (rain).',
    "She [does not like/doesn't like/doesnt like] (not like) to eat vegetables.",
    'My brother [fixes] (fix) computers for a living.',
    'The train [leaves] (leave) at 6 PM every day.',
    'Our teacher [explains] (explain) grammar rules very clearly.',
    'The sun [rises] (rise) in the east and [sets] (set) in the west.',
    'He [watches] (watch) TV while his sister [studies] (study).',
    'Dogs [bark] (bark) when they [see] (see) strangers.',
    'I [visit] (visit) my grandparents every summer.',
    'She [drives] (drive) to work even though she [lives] (live) nearby.',
    'Water [boils] (boil) at 100 degrees Celsius.',
    "We [do not go/don't go/dont go] (not go) to the gym on Sundays.",
    'Does he [know] (know) how to play the piano?',
    'Where [does] (do) your brother [work] (work)?',
    'The movie [starts] (start) at 8 PM tonight.',
    'He always [forgets] (forget) his keys at home.'
  ],
  presentContinuous: [
    "I [am doing/'m doing/m doing] (do) my homework now.",
    "He [is cooking/'s cooking/s cooking] (cook) at the moment.",
    "They [are playing/'re playing/re playing] (play) football right now.",
    "We [are looking/'re looking/re looking] (look) out the window.",
    "She [is having/'s having/s having] (have) dinner.",
    "You [are studying/'re studying/re studying] (study) for the exam.",
    "It [is raining/'s raining/s raining] (rain) outside.",
    "I [am reading/'m reading/m reading] (read) a book.",
    "He [is running/'s running/s running] (run) in the park.",
    "They [are swimming/'re swimming/re swimming] (swim) in the pool.",
    "We [are watching/'re watching/re watching] (watch) a movie.",
    "She [is listening/'s listening/s listening] (listen) to music.",
    "I [am cleaning/'m cleaning/m cleaning] (clean) my room.",
    "He [is driving/'s driving/s driving] (drive) to work.",
    "They [are talking/'re talking/re talking] (talk) on the phone.",
    "We [are playing/'re playing/re playing] (play) video games.",
    "She [is painting/'s painting/s painting] (paint) a picture.",
    "You [are dancing/'re dancing/re dancing] (dance) at the party.",
    "I [am writing/'m writing/m writing] (write) a letter.",
    "He [is sleeping/'s sleeping/s sleeping] (sleep) right now."
  ]
}
