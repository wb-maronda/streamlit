# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: streamlit/proto/Arrow.proto
# Protobuf Python Version: 5.28.2
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    28,
    2,
    '',
    'streamlit/proto/Arrow.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1bstreamlit/proto/Arrow.proto\"\xa3\x03\n\x05\x41rrow\x12\x0c\n\x04\x64\x61ta\x18\x01 \x01(\x0c\x12\x17\n\x06styler\x18\x02 \x01(\x0b\x32\x07.Styler\x12\r\n\x05width\x18\x03 \x01(\r\x12\x0e\n\x06height\x18\x04 \x01(\r\x12\x1b\n\x13use_container_width\x18\x05 \x01(\x08\x12\n\n\x02id\x18\x06 \x01(\t\x12\x0f\n\x07\x63olumns\x18\x07 \x01(\t\x12(\n\x0c\x65\x64iting_mode\x18\x08 \x01(\x0e\x32\x12.Arrow.EditingMode\x12\x10\n\x08\x64isabled\x18\t \x01(\x08\x12\x0f\n\x07\x66orm_id\x18\n \x01(\t\x12\x14\n\x0c\x63olumn_order\x18\x0b \x03(\t\x12,\n\x0eselection_mode\x18\x0c \x03(\x0e\x32\x14.Arrow.SelectionMode\"4\n\x0b\x45\x64itingMode\x12\r\n\tREAD_ONLY\x10\x00\x12\t\n\x05\x46IXED\x10\x01\x12\x0b\n\x07\x44YNAMIC\x10\x02\"S\n\rSelectionMode\x12\x0e\n\nSINGLE_ROW\x10\x00\x12\r\n\tMULTI_ROW\x10\x01\x12\x11\n\rSINGLE_COLUMN\x10\x02\x12\x10\n\x0cMULTI_COLUMN\x10\x03\"O\n\x06Styler\x12\x0c\n\x04uuid\x18\x01 \x01(\t\x12\x0f\n\x07\x63\x61ption\x18\x02 \x01(\t\x12\x0e\n\x06styles\x18\x03 \x01(\t\x12\x16\n\x0e\x64isplay_values\x18\x04 \x01(\x0c\x42*\n\x1c\x63om.snowflake.apps.streamlitB\nArrowProtob\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'streamlit.proto.Arrow_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\034com.snowflake.apps.streamlitB\nArrowProto'
  _globals['_ARROW']._serialized_start=32
  _globals['_ARROW']._serialized_end=451
  _globals['_ARROW_EDITINGMODE']._serialized_start=314
  _globals['_ARROW_EDITINGMODE']._serialized_end=366
  _globals['_ARROW_SELECTIONMODE']._serialized_start=368
  _globals['_ARROW_SELECTIONMODE']._serialized_end=451
  _globals['_STYLER']._serialized_start=453
  _globals['_STYLER']._serialized_end=532
# @@protoc_insertion_point(module_scope)