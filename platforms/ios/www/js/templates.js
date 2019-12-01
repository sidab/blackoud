Framework7.registerComponent('list-item-1', {
    template: `

        <div data-min="{{$props.min}}" data-id="{{$props.id}}" class="item list-item-1 bg-color-white text-align-center col-50 medium-33 large-25 margin-bottom">

            <div class="item-image" style="background-image: url('{{$props.image}}')"></div>

            <div class="item-info padding">

                <div class="item-before-name proxima-nova-cond-regular text-color-gray">Напоминает</div>

                <div class="item-name text-color-black proxima-nova-cond-bold">{{$props.name}}</div>

                <div class="item-price proxima-nova-cond-regular text-color-black">1мл - <span class="text-color-primary proxima-nova-cond-bold">{{$props.price}} ₽</span></div>
                
            </div>

        </div>
    
    `
});

Framework7.registerComponent('list-item-2', {
    template: `

        <div data-id="{{$props.id}}" class="item list-item-2 bg-color-white text-align-center col-50 medium-33 large-25 margin-bottom {{$props.class}}">

            <div class="item-image" style="background-image: url('{{$props.image}}')"></div>

            <div class="item-info padding">

                <div class="item-name text-color-black proxima-nova-cond-bold">{{$props.name}}</div>

                <div class="item-price proxima-nova-cond-regular text-color-black"><span class="text-color-primary proxima-nova-cond-bold">{{$props.price}} ₽</span></div>

            </div>

        </div>
    
    `
});

Framework7.registerComponent('list-item-3', {
    template: `
                <li>

                    <div data-uid="{{$props.uid}}" class="margin-bottom bg-color-white item-link list-item-3 item item-content {{$props.class}}">

                        <div class="item-media" style="background-image:url('{{$props.image}}')"></div>

                        <div class="item-inner">

                            <div class="item-title">

                                <div class="title">{{$props.name}}</div>
                                
                                <div class="volume text-color-gray margin-top">Тип: {{$props.aromaType}}</div>
                                <div class="volume text-color-gray">Объем: {{$props.volume}} мл ({{$props.priceOne}} ₽ за 1 мл)</div>
                                
                                {{#if $props.country}}
                                
                                    <div class="flakon text-color-gray">Страна: {{$props.country}}</div>
                                
                                {{/if}}
                                
                                <div class="flakon text-color-gray margin-top">Флакон: {{$props.flakonPrice}} ₽</div>
                                <div class="flakon text-color-gray">Объем флакона: {{$props.flakonVolume}} мл</div>
                                
                                {{#if $props.flakonColor}}
                                
                                    <div class="flakon text-color-gray">Цвет флакона: {{$props.flakonColor}}</div>
                                
                                {{/if}}

                                <div class="stepper no-event display-block width-100">
                
                                    <div class="stepper-inner no-event row">
                
                                        <div class="minus no-event padding-horizontal text-color-primary proxima-nova-cond-semibold">-</div>
                
                                        <div class="value no-event text-align-center proxima-nova-cond-regular">
                                        
                                            <span class="no-event">{{#js_if "this.$props.type == 'aroma'"}}{{$props.volume}}{{else}}{{$props.count}}{{/js_if}}</span> {{#js_if "this.$props.type == 'aroma'"}}мл{{else}}шт{{/js_if}}
                                            
                                        </div>
                
                                        <div class="plus no-event padding-horizontal text-color-primary proxima-nova-cond-semibold">+</div>
                
                                    </div>
                
                                </div>
                                
                            </div>

                            <div class="item-subtitle row margin-top">
                                
                                <div class="price">
                                
                                    <div class="total">{{$props.priceTotal}} ₽</div>
                                                                    
                                </div>
                             
                                <button class="button button-fill width-auto color-red remove">Удалить</button>

                            </div>

                        </div>

                    </div>

                </li>
    
    `
});

Framework7.registerComponent('list-item-4', {
    template: `
                <li>

                    <div data-uid="{{$props.uid}}" class="margin-bottom bg-color-white item-link list-item-4 item item-content {{$props.class}}">

                        <div class="item-media" style="background-image:url('{{$props.image}}')"></div>

                        <div class="item-inner">

                            <div class="item-title">

                                <div class="title margin-bottom">{{$props.name}}</div>
                                   
                                {{#js_if "this.$props.type == 'aroma'"}}
                                
                                    <div class="volume text-color-gray">Тип: {{$props.aromaType}}</div>
                                
                                {{/js_if}}
                                   
                                {{#js_if "this.$props.type == 'aroma'"}}
                                
                                    <div class="volume text-color-gray">Объем: {{$props.volume}} мл ({{$props.priceOne}} ₽ за 1 мл)</div>
                                
                                {{else}}
                                    
                                    <div class="volume text-color-gray">Объем флакона: {{$props.volume}} мл</div>
                                    <div class="volume text-color-gray">Количество: {{$props.count}} шт ({{$props.priceOne}} ₽ за 1 шт)</div>
                                    
                                {{/js_if}}        
                                
                                <div class="stepper no-event display-block width-100">
                
                                    <div class="stepper-inner no-event row">
                
                                        <div class="minus no-event padding-horizontal text-color-primary proxima-nova-cond-semibold">-</div>
                
                                        <div class="value no-event text-align-center proxima-nova-cond-regular">
                                        
                                            <span class="no-event">{{#js_if "this.$props.type == 'aroma'"}}{{$props.volume}}{{else}}{{$props.count}}{{/js_if}}</span> {{#js_if "this.$props.type == 'aroma'"}}мл{{else}}шт{{/js_if}}
                                            
                                        </div>
                
                                        <div class="plus no-event padding-horizontal text-color-primary proxima-nova-cond-semibold">+</div>
                
                                    </div>
                
                                </div>
                      
                            </div>

                            <div class="item-subtitle row margin-top">
                                
                                <div class="price">
                                
                                    <div class="total">{{$props.priceTotal}} ₽</div>
                                                                    
                                </div>
                             
                                <button class="button button-fill width-auto color-red remove">Удалить</button>

                            </div>

                        </div>

                    </div>

                </li>
    
    `
});

Framework7.registerComponent('list-item-5', {
    template: `

        <div data-id="{{$props.id}}" class="item list-item-1 bg-color-white text-align-center display-inline-block margin-right">

            <div class="item-image" style="background-image: url('{{$props.image}}')"></div>

            <div class="item-info padding">

                <div class="item-before-name proxima-nova-cond-regular text-color-gray">Напоминает</div>

                <div class="item-name text-color-black proxima-nova-cond-bold">{{$props.name}}</div>

                <div class="item-price proxima-nova-cond-regular text-color-black">1мл - <span class="text-color-primary proxima-nova-cond-bold">{{$props.price}} ₽</span></div>
                
            </div>

        </div>
    
    `
});