import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { pipelineTypes } from '../../modules/lookups';

@Component({
  selector: 'app-select-pipeline-type',
  templateUrl: './select-pipeline-type.component.html',
  styleUrls: ['./select-pipeline-type.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectPipelineTypeComponent),
    multi: true
  }]
})
export class SelectPipelineTypeComponent implements OnInit {

  /**************************************************************************************************************
   *
   * 初始化设置
   *
   **************************************************************************************************************/


  private _model: any; // 组件值
  private _disabled = false; // 组件状态
  private _placeHolder = '请选择管线类型'; // 输入提示

  private _field = 'label'; // 设置显示的字段（设为空，则依次显示label|title|key|自身，有值，则显示值的字段）
  private _target = 'code'; // 设置返回的字段(设为空，则值返回值本身，如果设字符，则返回值的字段)
  // 说明：field和target要配套使用，选择对返回的target，则设置的field的值必需对应，否则会存在值无法自动选中的问题，包括数据类型

  dataset = pipelineTypes;

  // model
  get model() {
    return this._model;
  }
  set model(val) {
    this._model = val;
    this.onModelChange(this._model);
  }

  // disabled
  @Input('ngDisabled')
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
  }
  // placeHolder
  @Input()
  get placeHolder() {
    return this._placeHolder;
  }
  set placeHolder(val) {
    this._placeHolder = val;
  }
  // target
  @Input()
  get target() {
    return this._target;
  }
  set target(val) {
    this._target = val;
  }
  // field
  @Input()
  get field() {
    return this._field;
  }
  set field(val) {
    this._field = val;
  }



  onModelChange: Function = () => {};

  constructor() {}

  // 赋值时调用
  writeValue(val: object): void {
    this._model = val;
  }

  // 页面值改变时，调用该方法，传入新值实现回传
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {}

  ngOnInit() {}

  /**************************************************************************************************************
   *
   * 常用函数
   *
   **************************************************************************************************************/
}
