"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
*!
Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

import builtins
import google.protobuf.descriptor
import google.protobuf.message
import typing

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing.final
class AppPage(google.protobuf.message.Message):
    """A page in the app. Includes both the name of the page as well as the full
    path to the corresponding script file.

    NOTE: This proto type is used by some external services so needs to remain
    relatively stable. While it isn't entirely set in stone, changing it
    may require a good amount of effort so should be avoided if possible.
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    PAGE_SCRIPT_HASH_FIELD_NUMBER: builtins.int
    PAGE_NAME_FIELD_NUMBER: builtins.int
    ICON_FIELD_NUMBER: builtins.int
    IS_DEFAULT_FIELD_NUMBER: builtins.int
    SECTION_HEADER_FIELD_NUMBER: builtins.int
    URL_PATHNAME_FIELD_NUMBER: builtins.int
    page_script_hash: builtins.str
    page_name: builtins.str
    icon: builtins.str
    is_default: builtins.bool
    """A feature for MPA v2 to inform the frontend what's the default page"""
    section_header: builtins.str
    url_pathname: builtins.str
    def __init__(
        self,
        *,
        page_script_hash: builtins.str = ...,
        page_name: builtins.str = ...,
        icon: builtins.str = ...,
        is_default: builtins.bool = ...,
        section_header: builtins.str = ...,
        url_pathname: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["icon", b"icon", "is_default", b"is_default", "page_name", b"page_name", "page_script_hash", b"page_script_hash", "section_header", b"section_header", "url_pathname", b"url_pathname"]) -> None: ...

global___AppPage = AppPage