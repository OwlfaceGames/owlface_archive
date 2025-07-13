# Medieval Dungeon Throwdown

## Playable Builds

This is one of the first games I ever made. It was made specifically as a portfolio piece at the time to show potential employers. It was made in 24 hours right before a job application, which was successful.


::: tip
To play, download the Windows binary from GitHub [releases](https://github.com/OwlfaceGames/owlface_archive/releases). See [controls](#controls) first.
:::

## Details

![Gif of Medieval Dungeon Throwdown](images/throwdown.gif)

It is a little arcade style mini game that for whatever reason I decided should have a film grain effect complete with vinyl crackle. Considering it was so early on I think it's kinda of interesting that it does have a cohesive aesthetic.

This game was probably made less than twelve months after I starting trying to teach myself how to make games.

::: info
- **Playable:** Yes 
- **Source Code:** No
- **Date:** Est. 2013
- **Project Type:** Portfolio Piece
- **Platforms:** Windows
- **Engine:**  GameMaker
- **Role:** Everything 
:::

## Original Documentation From 2013 

### Gameplay Concept

Medieval Dungeon Throwdown is an arcade style "beat-em up" mini game. The idea is that the player must face a random amount of enemies and survive for as long as possible whilst collecting bonus items in order to get more points. 100 points are awarded for each enemy defeated, the score is then multiplied by the amount of gold collected and the time the player has survived is then added on in order to get the final score.

The character in this game is intentionally clumsy and unagile. His sword is supposed to be so big that he is unable to move whilst using it.

This game is specifically designed as an example of a small scale project that could be released for IOS and Android. It is also an example of a game that players could hypothetically keep on playing forever in order to achieve a higher score.

The game is also intended to be a kind of satirical joke for fans of retro gaming. The film grain effect is supposed to be a reference to the relative low picture quality of TVs and arcade machines in the earlier years of gaming.

### Key Development Concepts

The main development concept that drives the whole mechanic of the game is the random generation of enemies. This is achieved by creating events that have within them a chance of creating 4 different objects, two of which are enemies and two of which are blank objects (blank objects are deleted on creation). This means that when one of these events occurs there is a fifty percent chance that an enemy will be created.

The game loads with two enemies already created. Once each of these enemies hits the floor there is a fifty percent chance each of them will cause another enemy to be created. When each enemy is destroyed there is also another fifty percent chance of an enemy being created.

This applies to every enemy in the game. Every enemy has a fifty percent chance of creating another when it hits the floor and when it is defeated. Hypothetically this means that is is possible for a match to go on indefinitely. However the odds of this occurring are so small that it almost definitely will not go on forever.

This development technique effectively means that each play through is in a sense unique and therefore has the potential for endless appeal. Although in order to create even longer appeal more variables could be added.

## Gameplay Video

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1rem 0;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    src="https://www.youtube-nocookie.com/embed/m0F4RHjYQHo "
    allowfullscreen>
  </iframe>
</div>

## Controls

A: Move left

D: Move right

Space: Attack (Player cannot move whilst attacking)

ESC: Quit game

Q: Quit battle and get score

R: Restart Game

F: Fullscreen

Note: If the level does not end and you are left with no enemies 
press "Q" to quit.
