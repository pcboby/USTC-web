import { ArkModule } from './../../ark/ark.module';

import { MapRoutes } from './map.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {
  AreasComponent,
  BuildingsComponent,
  SpacesComponent,
  PipelineComponent,
  PowerComponent,
  ContentsComponent,
  LayerVectorComponent,
  EnergyMonitoringComponent,
  AnalysisConnectedComponent,
  AnalysisCrossComponent,
  AnalysisExcavationComponent,
  AnalysisHealthyComponent,
  AnalysisHorizontalComponent,
  AnalysisTubeComponent,
  AnalysisVerticalComponent,
  ControlLocationComponent,
  ControlMeasureComponent,
  ControlTaggingComponent,
  EnergyMapComponent,
  HouseAttribComponent,
  HouseInformationComponent,
  HouseModifyComponent,
  LayerImageComponent,
  LayerModuleComponent,
  LayerPipelineComponent,
  PipelineAppendagesComponent,
  PipelineClickComponent,
  PipelineCombinationComponent,
  PipelineMaterialComponent,
  PipelinePointComponent,
  PipelinePatrolComponent,
  PipelinePowerComponent,
  PipelineSizeComponent,
  StatisticsAppendagesComponent,
  StatisticsBreakingComponent,
  StatisticsClassifyComponent,
  StatisticsLengthComponent,
  StatisticsNumberComponent,
  StatisticsRepairComponent,
  LayerVadioComponent,
  PrintSpecialComponent,
  PipelineSpaceComponent,
  PipelineModifyComponent,
  PipelineHistoryComponent
} from './components';
import { NgxEchartsModule } from 'ngx-echarts';

const modules = [
  ArkModule,
  CoreModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
  NgxEchartsModule,
  MapRoutes
];

const components = [
  MapComponent,
  AreasComponent,
  BuildingsComponent,
  SpacesComponent,
  PipelineComponent,
  PowerComponent,

  ContentsComponent,

  AnalysisConnectedComponent,
  AnalysisCrossComponent,
  AnalysisExcavationComponent,
  AnalysisHealthyComponent,
  AnalysisHorizontalComponent,
  AnalysisTubeComponent,
  AnalysisVerticalComponent,

  ControlLocationComponent,
  ControlMeasureComponent,
  ControlTaggingComponent,

  EnergyMapComponent,
  EnergyMonitoringComponent,

  HouseAttribComponent,
  HouseInformationComponent,
  HouseModifyComponent,

  LayerVectorComponent,
  LayerImageComponent,
  LayerModuleComponent,
  LayerPipelineComponent,
  LayerVadioComponent,

  PipelineAppendagesComponent,
  PipelineClickComponent,
  PipelineCombinationComponent,
  PipelineMaterialComponent,
  PipelinePointComponent,
  PipelinePatrolComponent,
  PipelineSpaceComponent,
  PipelinePowerComponent,
  PipelineSizeComponent,
  PipelineModifyComponent,
  PipelineHistoryComponent,

  PrintSpecialComponent,

  StatisticsAppendagesComponent,
  StatisticsBreakingComponent,
  StatisticsClassifyComponent,
  StatisticsLengthComponent,
  StatisticsNumberComponent,
  StatisticsRepairComponent
];

const services = [];

@NgModule({
  imports: [...modules],
  providers: [...services],
  declarations: [...components],
  entryComponents: [...components]
})
export class MapModule {}
