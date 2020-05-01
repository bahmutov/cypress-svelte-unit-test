/// <reference types="cypress" />
import AudioPlayer from './AudioPlayer.svelte'
import {mount} from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('AudioPlayer', () => {
  it('plays', () => {
    mount(AudioPlayer, {
      props: {
        src: "https://sveltejs.github.io/assets/music/strauss.mp3",
        title: "The Blue Danube Waltz",
        composer: "Johann Strauss",
        performer: "European Archive"
      }
    })
    cy.contains('The Blue Danube Waltz')
    cy.get('audio').then(audio => {
      audio[0].play()
    })
    cy.contains('The Blue Danube Waltz').should('have.css', 'color', 'rgb(255, 62, 0)')
      .wait(15000) // enjoy the music
    cy.get('audio').then(audio => {
      audio[0].pause()
    })
  })
})
