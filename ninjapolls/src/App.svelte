<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";

  import CreatePollForm from "./components/CreatePollForm.svelte";

  import Tabs from "./shared/Tabs.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  // polls
  let polls = [
    {
      id: 1,
      question: "Python or JS?",
      answerA: "Python",
      answerB: "JS",
      votesA: 9,
      votesB: 5,
    },
  ];

  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItem = "Current Polls";
    console.log(polls);
  };

  // handleVote
  const handleVote = (e) => {
    const { id, option } = e.detail;

    // entering an array of polls
    let copiedPolls = [...polls];
    // find poll customer is voting on by id in the handleVote
    let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
    // choose a or b to to vote for and increase
    if (option === "a") {
      upvotedPoll.votesA++;
    }
    if (option === "b") {
      upvotedPoll.votesB++;
    }
    // updating the array of polls
    polls = copiedPolls;
  };
</script>

<Header />

<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>

<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
