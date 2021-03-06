<div class="d-flex gap-4 article-action-button">
    <x-atoms.link href="#!" class="d-inline-flex align-items-center">
        <img src="{{ asset('assets/icons/ic-thumb_up.svg') }}" alt="">
        <span>{{ $like }}</span>
    </x-atoms.link>
    <x-molecules.offcanvas-comment target="{{ $target }}" totalComment="{{ $totalComment }}" comment="{{ $comment }}"/>
    <x-atoms.link href="#!" class="d-inline-flex align-items-center {{ $addOnClass }}">
        <img src="{{ asset('assets/icons/ic-share.svg') }}" alt="">
        <span>Share</span>
    </x-atoms.link>
</div>