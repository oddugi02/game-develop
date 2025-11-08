const title = document.querySelector('#title');

const start = document.querySelector('#start');
const textstart = document.querySelector('#textstart');
const blinkline2 = document.querySelector('#blinkline2');
const blinkline = document.querySelector('#blinkline');
const blankbox = document.querySelector('#blankbox');
const selfintro = document.querySelector('#selfintro');
const next1 = document.querySelector('#next1');
const next2 = document.querySelector('#next2');
const show = document.querySelector('#show');
const ohgray = document.querySelector('#ohgray');
const cursorgray = document.querySelector('#cursorgray');
const oh = document.querySelector('#oh');
const cursor = document.querySelector('#cursor');
const tada = document.querySelector('#tada');
const okay = document.querySelector('#okay');
const explain = document.querySelector('#explain');
const gotit = document.querySelector('#gotit');
const goodluck = document.querySelector('#goodluck');
const stage1 = document.querySelector('#stage1');
const stage2 = document.querySelector('#stage2');

const quest1 = document.querySelector('#quest1');
const quest1box = document.querySelector('#quest1box');
const quest1hint = document.querySelector('#quest1hint');
const ohbox1 = document.querySelector('#ohbox1');
const cursorbox1 = document.querySelector('#cursorbox1');
const cursor1 = document.querySelector('#cursor1');
const oh1 = document.querySelector('#oh1');
const oh2 = document.querySelector('#oh2');
const cur1 = document.querySelector('#cur1');
const cur2 = document.querySelector('#cur2');
const cursorr1 = document.querySelector('#cursorr1');
const cursorr2 = document.querySelector('#cursorr2');

const success = document.querySelector('#success');
const quest2 = document.querySelector('#quest2');
const platform1 = document.querySelector('#platform1');
const platform2 = document.querySelector('#platform2');
const cat1 = document.querySelector('#cat1');
const cat2 = document.querySelector('#cat2');
const cursorbox2 = document.querySelector('#cursorbox2');
const cursor2 = document.querySelector('#cursor2');
const test9 = document.querySelector('#test9');
const test1 = document.querySelector('#test1');
const test2 = document.querySelector('#test2');
const test3 = document.querySelector('#test3');
const test4 = document.querySelector('#test4');
const test5 = document.querySelector('#test5');
const test6 = document.querySelector('#test6');
const test7 = document.querySelector('#test7');
const test8 = document.querySelector('#test8');
const quest12 = document.querySelector('#quest12');
const quest12box = document.querySelector('#quest12box');
const quest1box2 = document.querySelector('#quest1box2');

const cursorbox12 = document.querySelector('#cursorbox12');
const ohbox2 = document.querySelector('#ohbox2');
const fail = document.querySelector('#fail');

const oh3 = document.querySelector('#oh3');
const oh4 = document.querySelector('#oh4');
const cur3 = document.querySelector('#cur3');
const cur4 = document.querySelector('#cur4');
const done = document.querySelector('#done');
const finish = document.querySelector('#finish')
const end = document.querySelector('#end')
const timer = document.querySelector('#timer')
const reset1 = document.querySelector('#reset1')



good.style.display = 'none';
blankbox.style.display = 'none';
start.style.display = 'none';
textstart.style.display = 'none';
blinkline2.style.display = 'none';
selfintro.style.display = 'none';
next1.style.display = 'none';
next2.style.display = 'none';
show.style.display = 'none';
ohgray.style.display = 'none';
cursorgray.style.display = 'none';
oh.style.display = 'none';
cursor.style.display = 'none';
tada.style.display = 'none';
okay.style.display = 'none';
explain.style.display = 'none';
gotit.style.display = 'none';
goodluck.style.display = 'none';
stage1.style.display = 'none';
stage2.style.display = 'none';

quest1.style.display = 'none';
quest1box.style.display = 'none';
quest1hint.style.display = 'none';
oh1.style.display = 'none';
oh2.style.display = 'none';
cur1.style.display = 'none';
cur2.style.display = 'none';
ohbox1.style.display = 'none';
cursorbox1.style.display = 'none';
success.style.display = 'none';
quest2.style.display = 'none';

platform1.style.display = 'none';
platform2.style.display = 'none';
cat1.style.display = 'none'
cat2.style.display = 'none'
cursorbox2.style.display = 'none';
cursor2.style.display = 'none';
test1.style.display = 'none';
test2.style.display = 'none';
test3.style.display = 'none';
test4.style.display = 'none';
test5.style.display = 'none';
test6.style.display = 'none';
test7.style.display = 'none';
test9.style.display = 'none';
test8.style.display = 'none';
quest12.style.display = 'none';
quest12box.style.display = 'none';
quest1box2.style.display = 'none';
cursorbox12.style.display = 'none';
ohbox2.style.display = 'none';
fail.style.display = 'none';
oh3.style.display = 'none';
oh4.style.display = 'none';
cur3.style.display = 'none';
cur4.style.display = 'none';
ohbox2.style.display = 'none';
cursorbox2.style.display = 'none';
finish.style.display = 'none';
done.style.display = 'none';
end.style.display = 'none';
timer.style.display = 'none';
reset1.style.display = 'none';



let timerTime = 25;
let timerInterval;

function startSimpleTimer() {
    timer.style.display = 'block';
    timerTime = 25;
    timer.textContent = timerTime;
    timerInterval = setInterval(() => {
        timerTime -= 1;
        timer.textContent = timerTime;
        if (timerTime <= 0) {
            clearInterval(timerInterval);
            timer.style.display = 'none';
            fail.style.display = 'block';
            reset1.style.display = 'block';
            reset1.ontouchend = () => {
                location.reload();
            }
            document.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, { passive: false });
        }
    }, 1000)
}
function stopSimpleTimer() {
    clearInterval(timerInterval);
    timer.style.display = 'none';
}

setTimeout(() => {
    title.style.opacity = 0;
    setTimeout(() => {
        title.style.display = 'none';
        start.style.display = 'block';
    }, 1000)
}, 2000)

start.ontouchend = () => {
    start.style.display = 'none';
    textstart.style.display = 'block';
    setTimeout(() => {
        blinkline.style.animation = 'none';
        blinkline.style.display = 'none';
        blinkline2.style.display = 'block'
        setTimeout(() => {
            blinkline2.style.animation = 'none';
            blinkline2.style.display = 'none';
            blankbox.style.display = 'block';
            setTimeout(() => {
                blankbox.style.animation = 'none';

            }, 1000)
        }, 1000)
    }, 3500)
}

blankbox.ontouchend = () => {
    selfintro.style.display = 'block';
    setTimeout(() => {
        next1.style.display = 'block';
    }, 3000)
    blankbox.style.animation = 'blankbox 3s infinite'
}

next1.ontouchend = () => {
    selfintro.textContent = '사람은 내가있는 공간을';
    setTimeout(() => {
        selfintro.textContent = '자유자재로 바꿀수있어';
        setTimeout(() => {
            selfintro.textContent = '정말 대단해';
            setTimeout(() => {
                selfintro.textContent = '나도 사람을 닮고 싶어서';
                setTimeout(() => {
                    selfintro.textContent = '한번 흉내를 내봤는데';
                    setTimeout(() => {
                        selfintro.textContent = '봐줄래?';
                        setTimeout(() => {
                            next2.style.display = 'block';
                        }, 1500)
                    }, 1500)
                }, 1500)
            }, 2500)
        }, 1500)
    }, 1500)
}

next2.ontouchend = () => {
    textstart.style.display = 'none';
    blankbox.style.display = 'none';
    selfintro.style.display = 'none';
    next2.style.display = 'none';
    show.style.display = 'block';
    show.textContent = '';
    ohgray.style.display = 'block';
    cursorgray.style.display = 'block';
    oh.style.display = 'block';
    cursor.style.display = 'block';
    oh.style.animation = 'ohmove 2s forwards';
    setTimeout(() => {
        cursor.style.animation = 'cursormove 2s forwards';
        setTimeout(() => {
            tada.style.display = 'block';
            setTimeout(() => {
                tada.textContent = '내 주변에 있던 글자 하나랑'
                setTimeout(() => {
                    tada.textContent = '커서모양을 가져와서'
                    setTimeout(() => {
                        tada.textContent = '나를 사람처럼 꾸며봤어!'
                        setTimeout(() => {
                            tada.textContent = '그런데 이걸로는 부족해'
                            setTimeout(() => {
                                tada.textContent = '내가 진짜 사람에 가까워질수있게 도와줘!'
                                setTimeout(() => {
                                    okay.style.display = 'block';
                                })
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 500)
}

okay.ontouchend = () => {
    explain.style.display = 'block';
    oh.style.display = 'none';
    cursor.style.display = 'none';
    tada.style.display = 'none';
    okay.style.display = 'none';
    ohgray.style.display = 'none';
    cursorgray.style.display = 'none';
    gotit.style.display = 'block';

}
gotit.ontouchend = () => {
    gotit.style.display = 'none';
    setTimeout(() => {
        explain.style.animation = 'explainfade 1s forwards';
        setTimeout(() => {
            goodluck.style.display = 'block';
            goodluck.style.animation = 'luckfadein 1s forwards';
            setTimeout(() => {
                goodluck.style.animation = 'luckfadeout 1s forwards';
                goodluck.style.display = 'none';
                stage1.style.display = 'block';
            }, 1000)
        }, 1000)
    }, 1000)
}


stage1.ontouchend = () => {
    stage1.style.display = 'none';
    quest1.style.display = 'block';
    quest1box.style.display = 'block';
    quest1hint.style.display = 'block';
    ohbox1.style.display = 'block';
    cursorbox1.style.display = 'block';
    cursor1.style.display = 'block';
    startSimpleTimer();
}

let touchohCount = 0;
ohbox1.ontouchend = () => {
    touchohCount += 1;
    if (touchohCount === 1) {
        oh1.style.display = 'block';
        touchohCount = 0;
    }
}

let touchcursorCount = 0;
cursorbox1.ontouchend = () => {
    touchcursorCount += 1;
    if (touchcursorCount === 1) {
        cur1.style.display = 'block';
        touchcursorCount = 0;
    }
}

let oh1Snapped = false;
let oh2Snapped = false;
let cur1Snapped = false;
let cur2Snapped = false;
let phase = 1;

oh1.ontouchmove = (e) => {
    if (oh1.dataset.locked === "true") return;
    const touch = e.touches[0];
    const x = touch.clientX - oh1.offsetWidth / 2;
    const y = touch.clientY - oh1.offsetHeight / 2;
    oh1.style.left = `${x}px`;
    oh1.style.top = `${y}px`;
}

oh1.ontouchend = () => {
    const oh1Rec = oh1.getBoundingClientRect();
    const answerRec = quest1box.getBoundingClientRect();
    const isOverlap = !(
        oh1Rec.right < answerRec.left ||
        oh1Rec.left > answerRec.right ||
        oh1Rec.bottom < answerRec.top ||
        oh1Rec.top > answerRec.bottom
    );

    if (isOverlap) {
        oh1.style.left = '180px';
        oh1.style.top = '200px';
        oh1Snapped = true;
        checkStageClearPhase1();

        setTimeout(() => {
            oh2.style.display = 'block';
        }, 1000);

        oh2.ontouchmove = (e) => {
            if (oh2.dataset.locked === "true") return;
            const touch = e.touches[0];
            const x = touch.clientX - oh2.offsetWidth / 2;
            const y = touch.clientY - oh2.offsetHeight / 2;
            oh2.style.left = `${x}px`;
            oh2.style.top = `${y}px`;
        };

        oh2.ontouchend = () => {
            const oh2Rec = oh2.getBoundingClientRect();
            const isOverlap = !(
                oh2Rec.right < answerRec.left ||
                oh2Rec.left > answerRec.right ||
                oh2Rec.bottom < answerRec.top ||
                oh2Rec.top > answerRec.bottom
            );

            if (isOverlap) {
                oh2.style.left = '220px';
                oh2.style.top = '200px';
                oh2Snapped = true;
                checkStageClearPhase1();
            } else {
                oh2Snapped = false;
            }
        };

    } else {
        oh1Snapped = false;
    }
}

if (oh1.style.left !== '180px' && oh1.style.top !== '200px') {

    cur1.ontouchmove = (e) => {
        if (cur1.dataset.locked === "true") return;
        const touch = e.touches[0];
        const x = touch.clientX - cur1.offsetWidth / 2;
        const y = touch.clientY - cur1.offsetHeight / 2;
        cur1.style.left = `${x}px`;
        cur1.style.top = `${y}px`;
    };

    cur1.ontouchend = () => {
        const cur1Rec = cur1.getBoundingClientRect();
        const answerRec = quest1box.getBoundingClientRect();
        const isOverlap = !(
            cur1Rec.right < answerRec.left ||
            cur1Rec.left > answerRec.right ||
            cur1Rec.bottom < answerRec.top ||
            cur1Rec.top > answerRec.bottom
        );

        if (isOverlap) {
            cur1.style.left = '180px';
            cur1.style.top = '200px';
            cur1Snapped = true;
            checkStageClearPhase1();

            setTimeout(() => {
                cur2.style.display = 'block';
            });

            cur2.ontouchmove = (e) => {
                if (cur2.dataset.locked === "true") return;
                const touch = e.touches[0];
                const x = touch.clientX - cur2.offsetWidth / 2;
                const y = touch.clientY - cur2.offsetHeight / 2;
                cur2.style.left = `${x}px`;
                cur2.style.top = `${y}px`;
            };

            cur2.ontouchend = () => {
                const cur2Rec = cur2.getBoundingClientRect();
                const isOverlap = !(
                    cur2Rec.right < answerRec.left ||
                    cur2Rec.left > answerRec.right ||
                    cur2Rec.bottom < answerRec.top ||
                    cur2Rec.top > answerRec.bottom
                );

                if (isOverlap) {
                    cur2.style.left = '220px';
                    cur2.style.top = '200px';
                    cur2Snapped = true;
                    checkStageClearPhase1();
                } else {
                    cur2Snapped = false;
                }
            };

        } else {
            cur1Snapped = false;
        }
    };
}



function get2() {
    phase = 2;

    quest12.style.display = 'block';
    quest12box.style.display = 'block'
    quest1hint.textContent = '*a=오 / b=커서모양'
    quest1.style.display = 'none';
    quest1box.style.display = 'none';
    quest1hint.style.display = 'block';
    oh1.style.display = 'none';
    oh2.style.display = 'none';
    cur1.style.display = 'none';
    cur2.style.display = 'none';
    quest1box2.style.display = 'block';
    ohbox1.style.display = 'none';
    ohbox2.style.display = 'block';
    cursorbox1.style.display = 'none';
    cursorbox12.style.display = 'block';

}
let oh3Snapped = false;
let oh4Snapped = false;
let cur3Snapped = false;
let cur4Snapped = false;
oh3.style.left = '80px';
oh3.style.top = '33px';
oh4.style.left = '80px';
oh4.style.top = '65px';
cur3.style.left = '20px';
cur3.style.top = '33px';
cur4.style.left = '20px';
cur4.style.top = '65px';
function checkStageClearPhase1() {

    if ((oh1Snapped && oh2Snapped) || (cur1Snapped && cur2Snapped)) {

        get2();
        let touchohCount2 = 0;
        ohbox2.ontouchend = () => {
            touchohCount2 += 1;
            if (touchohCount2 === 1) {
                oh3.style.display = 'block';
            } else if (touchohCount2 === 2) {
                oh4.style.display = 'none';
                touchohCount2 = 0;
            }

        }
        let touchcursorCount2 = 0;
        cursorbox12.ontouchend = () => {
            touchcursorCount2 += 1;
            if (touchcursorCount2 === 1) {
                cur3.style.display = 'block';
            } else if (touchcursorCount2 === 2) {
                cur4.style.display = 'none';
                touchcursorCount2 = 0;
            }

        }
        oh3.ontouchmove = (e) => {
            const touch = e.touches[0];
            const x = touch.clientX - oh3.offsetWidth / 2;
            const y = touch.clientY - oh3.offsetHeight / 2;
            oh3.style.left = `${x}px`;
            oh3.style.top = `${y}px`;

        }
        oh3.ontouchend = () => {
            const oh3Rec = oh3.getBoundingClientRect();
            const answerRec = quest1box2.getBoundingClientRect();

            const isOverlap = !(
                oh3Rec.right < answerRec.left ||
                oh3Rec.left > answerRec.right ||
                oh3Rec.bottom < answerRec.top ||
                oh3Rec.top > answerRec.bottom
            )

            if (isOverlap) {
                oh3.style.left = '110px'
                oh3.style.top = '270px'
                oh3Snapped = true
                checkStageClearPhase2();
                oh4.style.display = 'block'
                cur4.style.display = 'block'
                if (oh3.style.left === '110px' && oh3.style.top === '270px') {

                    oh4.ontouchmove = (e) => {
                        const touch = e.touches[0];
                        const x = touch.clientX - oh4.offsetWidth / 2;
                        const y = touch.clientX - oh4.offsetHeight / 2;
                        oh4.style.left = `${x}px`;
                        oh4.style.top = `${y}px`;

                    }
                    oh4.ontouchend = () => {
                        const answerRec = quest1box2.getBoundingClientRect();
                        const oh4Rec = oh4.getBoundingClientRect();
                        const isOverlapOh4 = !(
                            oh4Rec.right < answerRec.left ||
                            oh4Rec.left > answerRec.right ||
                            oh4Rec.bottom < answerRec.top ||
                            oh4Rec.top > answerRec.bottom
                        )
                        if (isOverlapOh4) {
                            oh4.style.left = '80px'
                            oh4.style.top = '65px'
                        }
                    }
                    cur3.ontouchmove = (e) => {
                        const touch = e.touches[0];
                        const x = touch.clientX - cur3.offsetWidth / 2;
                        const y = touch.clientY - cur3.offsetHeight / 2;
                        cur3.style.left = `${x}px`;
                        cur3.style.top = `${y}px`;
                    }
                    cur3.ontouchend = () => {
                        const cur3Rec = cur3.getBoundingClientRect();
                        const answerRec = quest1box2.getBoundingClientRect();
                        const isOverlapCur3 = !(
                            cur3Rec.right < answerRec.left ||
                            cur3Rec.left > answerRec.right ||
                            cur3Rec.bottom < answerRec.top ||
                            cur3Rec.top > answerRec.bottom
                        )
                        if (isOverlapCur3) {
                            cur3.style.left = '20px';
                            cur3.style.top = '33px';
                        }
                    }

                    cur4.ontouchmove = (e) => {
                        const touch = e.touches[0];
                        const x = touch.clientX - cur4.offsetWidth / 2;
                        const y = touch.clientY - cur4.offsetHeight / 2;
                        cur4.style.left = `${x}px`;
                        cur4.style.top = `${y}px`;
                    }

                    cur4.ontouchend = () => {
                        const cur4Rec = cur4.getBoundingClientRect();
                        const answerRec = quest1box2.getBoundingClientRect();
                        const isOverlapCur4 = !(
                            cur4Rec.right < answerRec.left ||
                            cur4Rec.left > answerRec.right ||
                            cur4Rec.bottom < answerRec.top ||
                            cur4Rec.top > answerRec.bottom
                        )
                        if (isOverlapCur4) {
                            cur4.style.left = '150px';
                            cur4.style.top = '270px';
                            cur4Snapped = true
                            checkStageClearPhase2();
                        }
                    }
                }

            }

        }




    }



}

function checkStageClearPhase2() {
    if (oh3Snapped && cur4Snapped) {
        stopSimpleTimer();
        quest12.style.display = 'none';
        quest12box.style.display = 'none'
        quest1hint.style.display = 'none';
        success.style.display = 'block';
        quest1box2.style.display = 'none';
        oh3.style.display = 'none';
        oh4.style.display = 'none';
        cur3.style.display = 'none';
        cur4.style.display = 'none';
        ohbox2.style.display = 'none';
        cursorbox12.style.display = 'none';
        setTimeout(() => {
            success.style.display = 'none';
            stage2.style.display = 'block';
        }, 1000)

    }
}





stage2.ontouchend = () => {

    stopSimpleTimer();
    startSimpleTimer();
    stage2.style.display = 'none';
    quest2.style.display = 'block';
    platform1.style.display = 'block';
    platform2.style.display = 'block';
    cat1.style.display = 'block'
    cat2.style.display = 'block'
    test1.style.display = 'block'
    test2.style.display = 'block'
    test3.style.display = 'block'
    test4.style.display = 'block'
    test5.style.display = 'block'
    test6.style.display = 'block'
    test7.style.display = 'block'
    setTimeout(() => {

        cursorbox2.style.display = 'block'
        cursor2.style.display = 'block';
        cursorbox2.style.animation = 'cursor2fade 2s forwards';
    }, 2000)



}
let cloneCount = 0;
cursorbox2.ontouchend = () => {
    if (cloneCount >= 7) {
        return
    }
    cloneCount += 1;
    const new2 = cursor2.cloneNode(true);
    new2.style.position = "absolute";
    new2.classList.add("clone");
    new2.style.left = oh1.style.left;
    new2.style.top = oh1.style.top;
    new2.style.touchAction = "none";
    document.body.appendChild(new2);
    new2.ontouchmove = (e) => {
        const touch = e.touches[0];
        const x = touch.clientX - new2.offsetWidth / 2;
        const y = touch.clientY - new2.offsetHeight / 2;
        new2.style.left = `${x}px`;
        new2.style.top = `${y}px`;
    }
    new2.ontouchend = () => {
        snapToNearest(new2);
    }
}

const snapTargets = [test1, test2, test3, test4, test5, test6, test7];
const usedTargets = new Set();

let snappedCount = 0
function snapToNearest(clone) {
    const cloneRect = clone.getBoundingClientRect();
    let closestTarget = null;
    let minDistance = Infinity;

    let finalDistance = Infinity;

    snapTargets.forEach(target => {
        if (usedTargets.has(target)) return;

        const targetRect = target.getBoundingClientRect();
        const dx = cloneRect.left - targetRect.left;
        const dy = cloneRect.top - targetRect.top;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < minDistance) {
            minDistance = dist;
            closestTarget = target;
            finalDistance = dist;
        }
    });


    if (closestTarget && minDistance < 80) {
        clone.style.left = `${closestTarget.offsetLeft}px`;
        clone.style.top = `${closestTarget.offsetTop}px`;
        usedTargets.add(closestTarget);
        if (!clone.dataset.snapped) {
            clone.dataset.snapped = "true";
            snappedCount++;
        }
        clone.style.pointerEvents = "none";
    }
    if (finalDistance < 200) {
        cat1.textContent = "😿";
    } else {
        cat1.textContent = "😿";
    }

    if (snappedCount === 7) {
        stopSimpleTimer();
        setTimeout(() => {
            cat1.textContent = '😸';
            cat2.textContent = '😸';
            setTimeout(() => {
                success.style.display = 'block';
                quest2.style.display = 'none';
                platform1.style.display = 'none';
                platform2.style.display = 'none';
                cat1.style.display = 'none';
                cat2.style.display = 'none';
                cursorbox2.style.display = 'none';
                test1.style.display = 'none';
                test2.style.display = 'none';
                test3.style.display = 'none';
                test4.style.display = 'none';
                test5.style.display = 'none';
                test6.style.display = 'none';
                test7.style.display = 'none';
                test8.style.display = 'none';
                test9.style.display = 'none';
                document.querySelectorAll('.clone').forEach(c => c.remove());

                setTimeout(() => {
                    done.style.display = 'block';
                    success.style.display = 'none';
                    setTimeout(() => {
                        done.style.display = 'none'
                    }, 2000)
                }, 2000)
            }, 2000)

        }, 1000)
    }
}

done.ontouchend = () => {
    done.style.display = 'none';
    finish.style.display = 'block';
    blankbox.style.display = 'block';
    blankbox.style.animation = 'blankbox 3s infinite'
    setTimeout(() => {
        finish.textContent = '정말 고마워'
        setTimeout(() => {
            finish.textContent = '너 덕분에 사람에대해 더 배워가!'
            setTimeout(() => {
                finish.textContent = '내가 사람이 되려면'
                setTimeout(() => {
                    finish.textContent = '한참많은 수련이 필요하겠지만'
                    setTimeout(() => {
                        finish.textContent = '그래도 조금은 가까워져서 기뻐!'
                        setTimeout(() => {
                            finish.textContent = '정말 고마워~'
                            finish.style.animation = 'finishfadeout 1s forwards'
                            setTimeout(() => {
                                finish.style.display = 'none'
                                blankbox.style.display = 'none'
                                blankbox.style.animation = 'blankfadeout 1s forwards';
                                end.style.display = 'block';
                                end.style.animation = 'endfadein 1s forwards'
                            }, 1000)

                        }, 2000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}



