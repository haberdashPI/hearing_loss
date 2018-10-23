What are the key take aways I want students to have at the end of the 2 days
{of lecture?

From the old lecture:
1. measuring pure-tone thresholds
    audiogram - basic psychophysics
    ABR
    otoacoustic emissions
  a. other measuring of hearing loss
      speech-in-noise
      cognitive load

  b. other measures of hearing??
      masking
      modulation detection

2. hearing loss - 
    sensory vs. conductive
    temporary hearing loss form damage
    damage to tip links

    hidden hearing loss - examples of what it sounds like

    high-frequency loss (aging hearing loss) - basilar membrane simulation

    tinnitus

3. improving hearing
    hearing aids - compression, how it's ineffective
    what hearing in noise is like

    examples of newer hearing technologies:
      ear machine
      (boss hearing aid)
      using eye gaze
      
      reading the brain with EEG

      cochlear implants
        - low spectral fidelity

    rehabilitation/training
      - NOTE: rather than just showing my slides
        go through the potential this has (mention AP studies)


what am I going to go more in depth into?

what am I going to add?
- a more thorough survey of rehabilitation?
- more hearing disorders, not just hearing loss?
- something about EEG decoding?

how am I going to make this more interactive? the key is, what
do I want people to take away from this, how do I see interaction helping
  in this case.

perhaps more focus on the engineering aspects of this -
  - the design of hearing aids
  - design of adaptive hearing aid algorithms
  - EEG decoding methods

get people excited about the psychophysics of this?
  show the various unintuitive aspects of perception
  give them an understanding of human's ability to analyze a scene
    and how this is impaired with hearing loss / other disabilities

one takeaway is that this is not just about a reduction in volume,
  fidelity also matters


things I could have the students do:
  sit in groups to answer questions to review the material
  get students to design something that somehow uses what we've learned
  come up with a few key discussion points and have a guided discussion
    begin that guided discussion with some reading material?

# brainstorm

if I were I student taking a course in audio DSP, why would I care about hearing
  loss?
well, you might want to design systems to help those with hearing loss
or with some other difficulty with hearing or perceiving sound

I think the overall point of this lecture is 
1. to pique student's interest in various engineering applications to hearing
   loss, and get into some of the challenges of doing that well.
2. Get students to appreciate the differences between what we can do with
   hearing aids/implants/newer devices, and actual human hearing
3. Help students to understand some of the evidence that this is how
   human hearing works, and where the gaps are.
4. probably talk a bit about human scene analysis - some of the data
   that this relies on a lot of cognitive processes, and identify how
   they are impaired with hearing loss.


students should be able to:
- identify the impacts of hearing loss
- distinguish between forms of hearing loss
- identify a cause for each form of hearing loss
- describe state of the art prosthetics for hearing loss
- describe N key limitations in our ability to assess hearing loss
- describe N key limitations of these devices
- identify N features of human hearing that 
  we cannot replicate with hearing prosthetics
- describe the logic behind the evidence supporting the existence
  of these features in human hearing
- describe the limitations in this evidence
- describe 3 lines of research to improve hearing prosthetics
  
what room is there in these goals for a more interactive process? what sorts
of self directed activities could this involve? 

I could ask students to relate what I've taught them about human hearing
and the current approaches (before I introduce some of the new ideas people have tried)
It would:
1. be interesting to see what students come up with
2. help students to synthesize what they've learned in the lectures
  about human hearing and what they've learned about the approaches to
  addressing human hearing.

I can project forward that this is what they'll be doing. 

## Lesson organization

1. an intro to hearing loss: the basics
2. some of the approaches to addressing hearing loss
3. some of the evidence we have about how human hearing works
   and some of the evidence of how impaired hearing with assistive devices works

somewhere in here it would be useful to provide information about things
like EEG decoding, eye tracking etc.. so that it is possible for students
to come up with the ideas I will discuss in the final section

4. group discussions 

5. introduce students to some of the state-of-the-art solutions people
   are thinking through.

# discussion format
ask students to identify limitations and propose solutions
have a sample of the groups provide a spokesperson to present the identified
limitations and solutions

create a list of the limitations and solutions

have each group assess the merits of each limitation and solution

bring the groups back and discuss those assessments: then, finally, I will
weigh in on this with anything I have to say about this.

# time line

- intro - topic of lecture & introduction to the format (2 min)
  - *goal* - in each of the discussion sessions students will be asked
    to synthesize the lecture material to identify limitations
      and propose solutions to better ameliorate hearing loss

- 28 minute lecture (existing methods to improve hearing loss)
  - consequences of hearing loss (1-2 min)
  - DEMO - what hearing loss sounds like (1-2 min)
    - key point - not simply a loss in volume, sounds become "blurry"
  - the audiogram - essential tool of hearing assessment (5 min)
  - mechanisms of hearing loss (12 min):
    - conductive - mention briefly (1-2 min)
    - sensorineural
      - damaged tip links (data for this) - 2min
      - exocytosis (data for this) - 2min
      - neuropathy, cell death (data for this) - 5min
      - results of sound exposure - how quickly hearing loss becomes permanent (1-2 mint)
  - hearing aids - (add more material - 9 min)
    - compression (2 minutes)
    - components of a hearing aid (3-4 minutes)
    - talk about time constant of compression (1 minute)
    - demo of hearing in noise (~3 minutes)
  - cochlear implants
    - components of cochlear implants (~2 minutes)
    - DEMO of high-temporal but low spectral resolution of cochlear implants (2 minutes)

- 5 minute break

- 20-15 minute discussion: 
  instructions - identify at least 2 problems with current approaches
    to addressing hearing loss and then propose possible solutions
  - 10 minutes to discuss in small groups possible limitations and solutions
  - 5-10 minute class discussion about those proposed solutions
    - format: each group presents their favorite limitation/solution
    - allow any groups to comment on these solutions
    - I add any of my own comments here about the solutions

- 30 minute lecture (human hearing)
  - problem: audiogram doesn't measure everything
  -  other methods to asses human hearing (18 minutes)
    - otoacoustic emissions (5 min)
    - ABR (3 min)
    - speech-in-noise (2 min)
    - high-frequency audiometery (5 min)
    - cognitive load (3 min)
  - problem: prosthetics don't work well in noise, let's look
    at some of things things humans do in noise (11 min)
    - olivary complex suppression of noise (2 min)
    - precedence effect (3 min)
    - cognitive gating of sounds (~6 min) - 
      - DEMO - ABS stimuli (1-2 min)
      - DEMO - stochastic figure ground stimuli (1-2 min)
      - Mesgarani - we can see enhancement of speech phonemes in the brain (3 min)
  
Day 2

- 5-10 minutes - any leftover material from Day 1, and then review
  what we covered (5 min). Ask if there are any questions about the material
  so far.
  - today's plan: students generate new limitations/solutions based on what
  they just learned about human hearing, then I will go over some state
  of the art approaches for hearing prosthetics.

- 10 minute lecture (human hearing cont.)
  - plasticity - usually good, but with poor hearing this leads
    to bad changes. (5 min)
      - evidence that having hearing aids sooner really helps (3 min)
      - (preliminary) evidence that training can make hearing aids easier to use (1-2 min)
  - tinnitus - possibly an example of plasticity gone awry (5 min)
    - basic facts - who it affects, mild examples (almost everyone),  
      but some people have it all the time (1 min)
    - DEMO sounds of tinnitus (1 min)
    - Kilgard's study of tinnitus (2 min)
    - some of the challenges of studying tinnitus (1 min)

- 20-15 minute discussion
  - directions: identify at least 2 possible solutions based on
    what you just learned about human hearing. 
  - 10 minutes to discuss in small groups possible limitations and solutions
  - 5-10 minute class discussion about those proposed solutions
    - format: each group presents their favorite limitation/solution
    - allow any groups to comment on these solutions
    - add any of my own comments here about the solutions

- 5 minute break

- 40 min lecture - modern/soon-to-be solutions to improve hearing
  - envelope decoding (10 min)
    - describe EEG: images, basic principles (2 min)
    - formulate explain regression problem (5 min)
    - show some results (2-3 min)
    - challenges: requires good source separation method
  - Using eye gaze - 7 min
    - image of prototype (1 min)
    - walk through *rough* basics of beam forming (2 min)
    - walk through principles of tracking the eye (1 min)
    - results (2 min)
  - Ear machine - 8 min
    - describe basic approach - 3 min
    - walk through regression training method - 3 min
    - some results (2 min)
  - Auditory Rehabilitation (10 minutes)
    - current approaches (2 min)
    - examples of working SIN approaches (4 minutes)
    - evidence that we can probably do better: (4 minutes)

