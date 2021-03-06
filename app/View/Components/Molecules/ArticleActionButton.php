<?php

namespace App\View\Components\Molecules;

use Illuminate\View\Component;

class ArticleActionButton extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */

    public $like, $comment, $addOnClass, $target, $totalComment;
    public function __construct($like, $comment, $addOnClass, $target, $totalComment)
    {
        $this->like = $like;
        $this->comment = $comment;
        $this->addOnClass = $addOnClass;
        $this->target = $target;
        $this->totalComment = $totalComment;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.molecules.article-action-button');
    }
}
