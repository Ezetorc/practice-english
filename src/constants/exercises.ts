import { Exercises } from '../models/Exercises'
import { ThemeId } from '../models/ThemeId'

export const exercises: { [key in ThemeId]: Exercises } = {
  presentSimple: [
    'I [live] (live) in London.',
    'She [works] (work) in a restaurant.',
    'Lisa [reads] (read) a book every night before she [goes] (go) to bed.',
    'My brother [fixes] (fix) computers for a living.',
    'The train [leaves] (leave) at 6 PM every day.',
    'The sun [rises] (rise) in the east and [sets] (set) in the west.',
    'Dogs [bark] (bark) when they [see] (see) strangers.',
    'Water [boils] (boil) at 100 degrees Celsius.',

    "She [does not like/doesn't like/doesnt like] (not like) to eat vegetables.",
    "We [do not go/don't go/dont go] (not go) to the gym on Sundays.",
    "Tom [does not work/doesn't work/doesnt work] (not work) on weekends.",
    "They [do not play/don't play/dont play] (not play) basketball.",
    "He [does not watch/doesn't watch/doesnt watch] (not watch) the news.",
    "She [does not drive/doesn't drive/doesnt drive] (not drive) at night.",

    'Does he [know] (know) how to play the piano?',
    'Where [does] (do) your brother [work] (work)?',
    'Do you [like] (like) chocolate?',
    'Does she [speak] (speak) English fluently?',
    'Do they [go] (go) to the park every Saturday?',
    'What time [does] (do) the train [leave] (leave)?'
  ],
  presentContinuous: [
    "I [am doing/'m doing/m doing] (do) my homework now.",
    "He [is cooking/'s cooking/s cooking] (cook) at the moment.",
    "She [is having/'s having/s having] (have) dinner.",
    "You [are studying/'re studying/re studying] (study) for the exam.",
    "It [is raining/'s raining/s raining] (rain) outside.",
    "They [are swimming/'re swimming/re swimming] (swim) in the pool.",
    "We [are watching/'re watching/re watching] (watch) a movie.",
    "I [am reading/'m reading/m reading] (read) a book.",

    "They [aren't playing/arent playing/are not playing] (not play) football right now.",
    "She [isn't listening/is not listening/isnt listening] (not listen) to music.",
    "He [isn't driving/is not driving/isnt driving] (not drive) today.",
    "I [am not cleaning/'m not cleaning] (not clean) my room.",
    "We [aren't working/are not working/arent working] (not work) this afternoon.",
    "You [aren't dancing/are not dancing/arent dancing] (not dance) at the party.",

    '[Are/are] we [looking] (look) out the window?',
    '[Is/is] she [painting] (paint) a picture?',
    '[Are/are] they [talking] (talk) on the phone?',
    '[Am/am] I [writing] (write) a letter?',
    '[Is/is] he [running] (run) in the park?',
    '[Are/are] you [studying] (study) for the exam?'
  ],
  presentPerfectSimple: [
    "We [have played/ve played/'ve played] (play) football on the ground.",
    "He [has written/'s written/s written] (write) a letter to his friend.",
    "They [have worked/ve worked/'ve worked] (work) in the field.",
    "She [has sung/s sung/'s sung] (sing) a song in the concert.",
    "I [have planted/ve planted/'ve planted] (plant) some plants in my garden.",
    "He [has visited/'s visited/s visited] (visit) many countries.",
    "They [have seen/ve seen/'ve seen] (see) that movie.",
    "She [has cooked/'s cooked/s cooked] (cook) dinner already.",

    "I [haven't woken/have not woken/havent woken] (not wake) early in the morning.",
    "She [hasn't traveled/has not traveled/hasnt traveled] (not travel) to Spain.",
    "They [haven't finished/have not finished/havent finished] (not finish) their homework.",
    "He [hasn't cleaned/has not cleaned/hasnt cleaned] (not clean) his room.",
    "We [haven't seen/have not seen/havent seen] (not see) that movie.",
    "You [haven't called/have not called/havent called] (not call) me yet.",

    '[Have/have] you [finished] (finish) your homework?',
    '[Has/has] she [traveled] (travel) to Spain?',
    '[Have/have] they [seen] (see) that movie?',
    '[Has/has] he [brushed] (brush) his teeth?',
    '[Have/have] we [planted] (plant) the flowers?',
    '[Has/has] Harry [written] (write) a letter?'
  ]
}
