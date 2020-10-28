<template>
  <div class="step4 message">
    <div class="message-header has-background-primary">
      <span class="tag is-info">STEP4</span>
      <div class="header">
        <span class="icon">
          <i class="fa fa-file-alt"></i>
        </span>
        <span>以下の内容をご確認ください</span>
      </div>
    </div>
    <div class="message-body">
      <div class="control">
        <p class="has-text-info">-性別-</p>
        <p>{{ $store.state.gender }}</p>
      </div>
      <div class="control">
        <p class="has-text-info">-生年月日-</p>
        <p>{{ $store.state.dateOfBirth }}</p>
      </div>
      <div class="control">
        <p class="has-text-info">-現在、生命保険に加入されていますか？-</p>
        <p>{{ $store.state.haveInsurance }}</p>
      </div>
      <div class="control">
        <p class="has-text-info">-現在入院中ですか？または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？-</p>
        <p>{{ $store.state.isHospitalized }}</p>
      </div>
      <div class="control">
        <p class="has-text-info">-過去５年以内に、病気やけがで、手術を受けたこことまたは継続して７日以上の入院をしたことがありますか？-</p>
        <p>{{ $store.state.wasHospitalized }}</p>
      </div>
      <div class="control">
        <p class="has-text-info">-ご相談内容-</p>
        <p>{{ $store.state.consultation }}</p>
      </div>
    </div>
    <div class="message-footer">
      <button class="button is-primary is-medium">
        <router-link to="step3">
          <span class="icon">
            <i class="fa fa-angle-left"></i>
          </span>
          <span>前へ戻る</span>
        </router-link>
      </button>
      <button class="button is-primary is-medium">
        <span>送信</span>
        <span class="icon">
          <i class="fa fa-angle-right"></i>
        </span>
      </button>
    </div>
  </div>
</template>
