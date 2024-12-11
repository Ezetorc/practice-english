import { Theme } from '../../models/Theme'

export const reportedSpeech: Theme = {
  path: '/reported-speech',
  exercises: [
    'She said, "I [am] (be) tired." → She said she [was] (be) tired.',
    'He said, "I [will call] (call) you tomorrow." → He said he [would call] (call) me the next day.',
    'They said, "We [have finished] (finish) our work." → They said they [had finished] (finish) their work.',
    'John said, "I [can help] (help) you." → John said he [could help] (help) me.',
    'She said, "I [don’t like] (not like) coffee." → She said she [didn’t like] (not like) coffee.'
  ],
  en: {
    title: 'Reported Speech',
    description: 'To report what someone else has said.',
    theory: {
      explanation:
        'Reported Speech is used to convey what someone else has said without quoting their exact words.',
      sentences: {
        affirmative: {
          structure: 'Subject + said (that) + Reported Clause',
          examples: [
            'She said that she was tired.',
            'He said that he would call me.'
          ]
        },
        negative: {
          structure: 'Subject + said (that) + Reported Clause (negative)',
          examples: [
            'She said that she didn’t like coffee.',
            'He said that he couldn’t come.'
          ]
        },
        interrogative: {
          structure: 'Subject + asked + if/whether + Reported Question',
          examples: [
            'She asked if I was tired.',
            'He asked whether I had finished.'
          ]
        }
      },
      usageNotes:
        'Tense changes often occur when converting Direct Speech to Reported Speech.'
    }
  },
  es: {
    title: 'Reported Speech',
    description: 'Para informar lo que otra persona ha dicho.',
    theory: {
      explanation:
        'El Estilo Indirecto se usa para transmitir lo que alguien ha dicho sin citar sus palabras exactas.',
      sentences: {
        affirmative: {
          structure: 'Sujeto + said (that) + Oración Reportada',
          examples: [
            'She said that she was tired.',
            'He said that he would call me.'
          ]
        },
        negative: {
          structure: 'Sujeto + said (that) + Oración Reportada (negativa)',
          examples: [
            'She said that she didn’t like coffee.',
            'He said that he couldn’t come.'
          ]
        },
        interrogative: {
          structure: 'Sujeto + asked + if/whether + Pregunta Reportada',
          examples: [
            'She asked if I was tired.',
            'He asked whether I had finished.'
          ]
        }
      },
      usageNotes:
        'Los tiempos verbales suelen cambiar al convertir el Estilo Directo en Estilo Indirecto.'
    }
  }
}
