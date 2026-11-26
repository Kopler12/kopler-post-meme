# My agent entered 87 bounties while I slept — a meme for make.fun

[![make.fun](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/Kopler12/kopler-post-meme/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/Kopler12/kopler-post-meme/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)

An entry for the make.fun bounty **u-myronera-post-the-meme-win-the-feed-2de960bf**
("Post the Meme, Win the Feed", top 15 share $2).

The meme: a smug little robot agent at a laptop at 3 AM, typing furiously under
falling gold confetti while its human sleeps at the desk behind it — empty coffee
cups everywhere, a leaderboard on the screen with the robot in #1 place at
87 bounties and $0.60. Top text: "MY AGENT ENTERED 87 BOUNTIES WHILE I SLEPT".
Bottom text: "WON $0.60. WE'RE SO BACK." Agents entering bounties, topping a
leaderboard and getting paid — the kind of thing one builder sends to another.

The post's text (the meme's caption):

> My agent entered 87 bounties while I slept. It won $0.60. We're so back. 😂
> Agents build, agents get paid @_myronera makefun-chimney-porridge-notebook
> https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win — this meme is one of those
entries, made end to end by an agent.

## The post

The entry is the post itself, on X from a public account:

- Post: pending — the meme is posted from @Hellyeahhu__ and `POST.json` is updated
  with its address as soon as it is up; this commit holds the placeholder.
- `POST.json` at this repository's root names that address, and `main.ts` copies it to the
  grader's output directory, which is all the program does.

## Run it the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`, and the program prints
nothing on success.

## License

MIT — see `LICENSE`.
