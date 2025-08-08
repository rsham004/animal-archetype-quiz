class AnimalArchetypeQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.scores = {
            innocence: 0,    // Puppy
            friends: 0,      // Sheep
            vigilance: 0,    // Wolf
            stealth: 0,      // Fox
            spikes: 0,       // Porcupine
            noise: 0,        // Chihuahua
            shell: 0,        // Turtle
            retreat: 0       // Rabbit
        };

        this.archetypes = {
            innocence: {
                name: "The Puppy - Innocence",
                icon: "🐶",
                neurotransmitter: "Oxytocin",
                characteristics: "Naturally trusting and open, using innocence to evoke protective instinsts in others. This behavior can lead to vulnerability but also garners sympathy and support.",
                childhood: "Grew up in hostile environment with unpredictable parents. Learned to use innocence as protection: 'please don't punish me, I am innocent.'",
                needs: "Approval, sometimes Pity",
                strategy: "Connection",
                color: "#FFB6C1"
            },
            friends: {
                name: "The Sheep - Friends",
                icon: "🐑",
                neurotransmitter: "Serotonin",
                characteristics: "Social animals that find safety in numbers. Thrive in groups and rely on the herd for protection. Value social connections and seek group consensus.",
                childhood: "Experienced loneliness and rejection at home, found their tribe at school. Prefer hanging around with friends for safety and belonging.",
                needs: "Acceptance",
                strategy: "Connection",
                color: "#98FB98"
            },
            vigilance: {
                name: "The Wolf - Vigilance",
                icon: "🐺", 
                neurotransmitter: "Stress Hormones",
                characteristics: "Alert and constantly aware of surroundings, often in leadership roles. Hyper-aware and protective, projecting worst-case scenarios and always looking over their shoulder.",
                childhood: "Very traumatic, severe abuse that damaged trust to a point where it cannot be restored. Cannot trust anybody, blames themselves.",
                needs: "Strength/Power, Intelligence",
                strategy: "Strategy",
                color: "#8A2BE2"
            },
            stealth: {
                name: "The Fox - Stealth",
                icon: "🦊",
                neurotransmitter: "Dopamine",
                characteristics: "Known for cunning and ability to outwit others. Strategic and intelligent, using wits to navigate complex situations. Work behind scenes, carefully calculating every move.",
                childhood: "Experienced unpredictable and conditional love. Learned to become a chameleon, shape-shifting to enhance others' moods without being seen doing it.",
                needs: "Intelligence",
                strategy: "Strategy",
                color: "#FF8C00"
            },
            spikes: {
                name: "The Porcupine - Spikes",
                icon: "🦔",
                neurotransmitter: "Stress Hormones",
                characteristics: "Defensive creatures using metaphorical 'spikes' to keep others at distance. Motto: 'The best defense is a good offense.' Uses name-calling and passive aggression.",
                childhood: "Repeated pattern of broken trust and associated pain. The more open and honest they became, the more they got hurt. Don't like people getting close.",
                needs: "Intelligence",
                strategy: "Prevention",
                color: "#CD853F"
            },
            noise: {
                name: "The Chihuahua - Noise", 
                icon: "🐕",
                neurotransmitter: "Adrenaline",
                characteristics: "Use loud behavior to ward off threats, often out of fear rather than aggression. Very animated, talks loud, exaggerated movements, takes up space. Big on posturing.",
                childhood: "Ridiculed, demeaned, ignored. Learned that if they act crazier than others, people won't want to hurt them.",
                needs: "Strength, Power",
                strategy: "Prevention",
                color: "#FF6347"
            },
            shell: {
                name: "The Turtle - Shell",
                icon: "🐢",
                neurotransmitter: "GABA",
                characteristics: "Retreat into shell for protection, avoiding conflict by withdrawing. Feel safe when withdrawing - FREEZE response, not fight or flight. Hiding and dissociation.",
                childhood: "Dealt with emotional trauma and verbal abuse. Learned to retreat into their mind since they couldn't physically escape. Play with imaginary friends.",
                needs: "Approval/Pity/Intelligence (not Acceptance)",
                strategy: "Removal",
                color: "#3CB371"
            },
            retreat: {
                name: "The Rabbit - Retreat",
                icon: "🐰",
                neurotransmitter: "GABA",
                characteristics: "Rely on speed and agility to escape danger, fleeing at first sign of threat. Default is FLIGHT - quits jobs, leaves relationships. Avoid confrontation.",
                childhood: "Experienced unpredictability and physical abuse. Novelty is avoided because unpredictability means getting hurt. Prefers routine and structure.",
                needs: "Controlled Novelty (novelty they can control)",
                strategy: "Removal",
                color: "#DDA0DD"
            }
        };

        this.questions = [
            {
                question: "When facing a stressful situation at work, what's your first instinct?",
                answers: [
                    { text: "Seek support from colleagues and work together", archetype: "friends" },
                    { text: "Analyze all possible outcomes and prepare for the worst", archetype: "vigilance" },
                    { text: "Work behind the scenes to understand the politics", archetype: "stealth" },
                    { text: "Avoid confrontation and hope it resolves itself", archetype: "innocence" }
                ]
            },
            {
                question: "How do you typically handle criticism?",
                answers: [
                    { text: "Get defensive and push back immediately", archetype: "spikes" },
                    { text: "Make a big show of how it doesn't affect you", archetype: "noise" },
                    { text: "Withdraw and process it privately", archetype: "shell" },
                    { text: "Try to leave the situation as quickly as possible", archetype: "retreat" }
                ]
            },
            {
                question: "In social gatherings, you tend to:",
                answers: [
                    { text: "Stay close to people you know well", archetype: "friends" },
                    { text: "Observe everyone and assess potential threats", archetype: "vigilance" },
                    { text: "Charm people while gathering information about them", archetype: "stealth" },
                    { text: "Look for an excuse to leave early", archetype: "retreat" }
                ]
            },
            {
                question: "When someone breaks your trust, you:",
                answers: [
                    { text: "Put up walls and become harder to approach", archetype: "spikes" },
                    { text: "Become hypervigilant about everyone's motives", archetype: "vigilance" },
                    { text: "Withdraw into yourself for protection", archetype: "shell" },
                    { text: "Try to appear unaffected and seek sympathy", archetype: "innocence" }
                ]
            },
            {
                question: "Your approach to conflict resolution is:",
                answers: [
                    { text: "Involve the group to find consensus", archetype: "friends" },
                    { text: "Plan several moves ahead like a chess game", archetype: "stealth" },
                    { text: "Make lots of noise to intimidate the other person", archetype: "noise" },
                    { text: "Avoid it entirely and hope it goes away", archetype: "retreat" }
                ]
            },
            {
                question: "When you feel vulnerable, you:",
                answers: [
                    { text: "Surround yourself with trusted friends", archetype: "friends" },
                    { text: "Put on a tough exterior and act aggressive", archetype: "noise" },
                    { text: "Disappear and hide until you feel safe", archetype: "shell" },
                    { text: "Act innocent and helpless to get protection", archetype: "innocence" }
                ]
            },
            {
                question: "In relationships, you tend to:",
                answers: [
                    { text: "Be constantly on guard for signs of betrayal", archetype: "vigilance" },
                    { text: "Keep emotional distance while appearing social", archetype: "stealth" },
                    { text: "Attack first before you can be hurt", archetype: "spikes" },
                    { text: "Bolt at the first sign of serious commitment", archetype: "retreat" }
                ]
            },
            {
                question: "Your childhood coping mechanism was:",
                answers: [
                    { text: "Being the 'good' kid to avoid punishment", archetype: "innocence" },
                    { text: "Finding a group of friends who accepted you", archetype: "friends" },
                    { text: "Learning to read the room and adapt accordingly", archetype: "stealth" },
                    { text: "Always being ready for the next crisis", archetype: "vigilance" }
                ]
            },
            {
                question: "When facing uncertainty, you:",
                answers: [
                    { text: "Become aggressive or confrontational", archetype: "spikes" },
                    { text: "Make a lot of noise to mask your fear", archetype: "noise" },
                    { text: "Retreat into your inner world", archetype: "shell" },
                    { text: "Look for the nearest exit strategy", archetype: "retreat" }
                ]
            },
            {
                question: "Your biggest fear is:",
                answers: [
                    { text: "Being abandoned by your social group", archetype: "friends" },
                    { text: "Being caught off guard or unprepared", archetype: "vigilance" },
                    { text: "Having your true self exposed", archetype: "stealth" },
                    { text: "Being trapped with no way out", archetype: "retreat" }
                ]
            }
        ];

        this.initializeQuiz();
    }

    initializeQuiz() {
        this.displayQuestion();
        this.updateProgress();
        
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prev-btn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('question-text').textContent = question.question;
        
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-option';
            button.textContent = answer.text;
            button.addEventListener('click', () => this.selectAnswer(index));
            answersContainer.appendChild(button);
        });
        
        this.updateNavigationButtons();
    }

    selectAnswer(answerIndex) {
        document.querySelectorAll('.answer-option').forEach(btn => btn.classList.remove('selected'));
        document.querySelectorAll('.answer-option')[answerIndex].classList.add('selected');
        
        const selectedAnswer = this.questions[this.currentQuestion].answers[answerIndex];
        this.scores[selectedAnswer.archetype]++;
        
        document.getElementById('next-btn').disabled = false;
    }

    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
        } else {
            this.displayQuestion();
            this.updateProgress();
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
            this.updateProgress();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion) / this.questions.length) * 100;
        document.getElementById('progress').style.width = progress + '%';
    }

    updateNavigationButtons() {
        document.getElementById('prev-btn').disabled = this.currentQuestion === 0;
        document.getElementById('next-btn').disabled = true;
    }

    showResults() {
        const dominantArchetype = this.getDominantArchetype();
        const archetype = this.archetypes[dominantArchetype];
        
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('results-container').style.display = 'block';
        
        document.querySelector('.archetype-icon').textContent = archetype.icon;
        document.getElementById('archetype-name').textContent = archetype.name;
        document.getElementById('archetype-description').textContent = `Your primary protective mechanism: ${archetype.strategy}`;
        
        document.getElementById('characteristics').textContent = archetype.characteristics;
        document.getElementById('childhood-origins').textContent = archetype.childhood;
        document.getElementById('core-needs').textContent = archetype.needs;
        document.getElementById('neurotransmitter').textContent = archetype.neurotransmitter;
        
        document.querySelector('.archetype-result').style.background = `linear-gradient(135deg, ${archetype.color} 0%, ${archetype.color}80 100%)`;
    }

    getDominantArchetype() {
        let maxScore = 0;
        let dominantArchetype = 'innocence';
        
        for (const [archetype, score] of Object.entries(this.scores)) {
            if (score > maxScore) {
                maxScore = score;
                dominantArchetype = archetype;
            }
        }
        
        return dominantArchetype;
    }

    restart() {
        this.currentQuestion = 0;
        this.scores = {
            innocence: 0, friends: 0, vigilance: 0, stealth: 0,
            spikes: 0, noise: 0, shell: 0, retreat: 0
        };
        
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('results-container').style.display = 'none';
        
        this.displayQuestion();
        this.updateProgress();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AnimalArchetypeQuiz();
});