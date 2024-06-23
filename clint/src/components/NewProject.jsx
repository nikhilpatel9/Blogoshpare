import { Button } from 'flowbite-react';

export default function NewProject() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
    <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
        A word search game is a puzzle where players must find a list of hidden words within a grid of letters 
        </h2>
        <p className='text-gray-500 my-2'>
            Checkout these game! made with JavaScript , CSS, HTML, jQuery , Bootstrap.
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <a href="https://nikhilpatel9.github.io/Word_Search_Puzzle/" target='_blank' rel='noopener noreferrer'>
              Words Search Puzzle
            </a>
        </Button>
    </div>
    <div className="p-7 flex-1">
        <img src="https://thewordsearch.com/v4/img/word-search-puzzle.png" />
    </div>
</div>
)
}