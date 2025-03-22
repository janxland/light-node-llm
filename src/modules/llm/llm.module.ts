// llm.module.ts
import { Module } from '@nestjs/common';
import { Tools } from './tools';
import { LLMService } from './llm.service';
import { LLMController } from './llm.controller';

@Module({
  providers: [Tools, LLMService],
  controllers: [LLMController],
  exports: [LLMService], // 如果你还想让其他模块使用 LLMService，就需要 exports
})
export class LLMModule {}
